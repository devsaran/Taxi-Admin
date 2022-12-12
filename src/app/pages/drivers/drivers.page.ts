import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlertController, LoadingController } from '@ionic/angular';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {
  skeletOns: {}[];
  hideSkeleton: boolean;
  drivers: any;
  hasNoData: boolean;
  segmentModel = "default";
  triphistory: any;

  displayedColumns: string[] = ['Driver Name', 'Driver Phone', 'Driver Car', 'Driver CarType', 'Driver Email', 'Driver Plate', 'Driver Rating', 'Driver Earnings', 'Driver Latitude', 'Driver Longitude', 'Driver Image', 'Documents' ];
  records = new MatTableDataSource;
  displayedColumns2: string[] = ['Driver Name', 'Driver Phone', 'Driver Car', 'Driver CarType', 'Driver Email', 'Driver Plate', 'Driver Image', 'Documents', 'Accept' ];
  records2 = new MatTableDataSource;
  segment: any;
  length: number = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public columns: any;
  public rows: any[];
  redy: number = 3;
  cancelledhistory: any;
  constructor(private chatService: AvatarService, private loadingController: LoadingController, public alertController: AlertController) { }


  async ionViewDidEnter() {
    this.skeletOns = [
      {},{},{},{}
    ]

    this.hideSkeleton = true;
    this.drivers = (this.chatService.getDrivers())

   
   

   
  this.drivers.subscribe((d)=>{
    this.records.data = [];
    d.forEach(element => {
     if (element.Approved == true)
     this.records.data.push(element)
     this.length = this.records.data.length;
     this.records.paginator = this.paginator;
     this.records.sort = this.sort;
     this.rows = d;
     if (d.length == 0){
       this.hasNoData = true;
       this.hideSkeleton = false;
     }else{
       this.hideSkeleton = false;
       this.hasNoData = false;
     }
   });
  })


  this.drivers.subscribe((d)=>{
    this.records2.data = [];
   d.forEach(element => {
    if (element.Approved == false)
    this.records2.data.push(element)
    this.length = this.records2.data.length;
    this.records2.paginator = this.paginator;
    this.records2.sort = this.sort;
    this.rows = d;
    if (d.length == 0){
      this.hasNoData = true;
      this.hideSkeleton = false;
    }else{
      this.hideSkeleton = false;
      this.hasNoData = false;
    }
  });
})

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.records.filter = filterValue.trim().toLowerCase();

    if (this.records.paginator) {
      this.records.paginator.firstPage();
    }
  }

  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.records2.filter = filterValue.trim().toLowerCase();

    if (this.records2.paginator) {
      this.records2.paginator.firstPage();
    }
  }

  ngOnInit() {
  }


  AddDriver(){
    
  }

  gotoDocs(e){
    console.log(e);
  }

  async Approve(e){
    console.log(e)
    const loading = await this.loadingController.create();
    await loading.present();
    const fk = await this.chatService.UpdateDriverApprove(true, e.Driver_id);

    loading.dismiss();

    const alert = await this.alertController.create({
      header: e.Driver_name + ' Has Been Added',
      message: 'Success',
      buttons: ['OK'],
    });
    await alert.present();
      
  }

}
