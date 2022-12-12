import { Component, OnInit, ViewChild } from '@angular/core';
import { Firestore, onSnapshot, doc, collection } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonContent, ModalController, ModalOptions, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AvatarService } from 'src/app/services/avatar.service';
import { SupportComponent } from 'src/app/support/support.component';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  skeletOns: {}[];
  hideSkeleton: boolean;
  drivers: any;
  hasNoData: boolean;
  segmentModel = "default";
  triphistory: any;

  displayedColumns: string[] = ['name', 'phone', 'email', 'Chat' ];
  records = new MatTableDataSource;
  displayedColumns2: string[] = ['Driver Name', 'Driver Phone', 'Driver Car', 'Driver CarType', 'Driver Email', 'Driver Plate', 'Driver Image', 'Documents' ];
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
  constructor(private chatService: AvatarService, private firestore: Firestore, private modalCtrl: ModalController) { }

  async ionViewDidEnter() {
    this.skeletOns = [
      {},{},{},{}
    ]

   
    this.hideSkeleton = true;
    this.drivers = (this.chatService.getMessages())

    console.log(this.drivers);

  this.drivers.subscribe((d)=>{
    this.records.data = [];
     this.records.data = d
     console.log(d);
     this.length = this.records.data.length;
     this.records.paginator = this.paginator;
     this.records.sort = this.sort;
     if (d.length == 0){
       this.hasNoData = true;
       this.hideSkeleton = false;
     }else{
       this.hideSkeleton = false;
       this.hasNoData = false;
     }
   
  })


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.records.filter = filterValue.trim().toLowerCase();
    if (this.records.paginator) {
      this.records.paginator.firstPage();
    }
  }

  ngOnInit() {
  }


  async gotoDocs(item){
    console.log(item);
    const options: ModalOptions = {
      component: SupportComponent,
      componentProps: {
        info: item,
      },
      swipeToClose: true
    };
    const modal = this.modalCtrl.create(options);
    (await modal).present();
    const data: any = (await modal).onWillDismiss();

  }

}