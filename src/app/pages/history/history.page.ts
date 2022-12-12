import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AvatarService } from 'src/app/services/avatar.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
export interface Data {
  movies: string;
}


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  skeletOns: {}[];
  hideSkeleton: boolean;
  triphistory: any;
  hasNoData: boolean;

  displayedColumns: string[] = ['Driver Name', 'Driver Phone', 'Rider Name', 'Rider Phone', 'Pickup', 'DropOff', 'Price' ];
  records = new MatTableDataSource;
  displayedColumns2: string[] = ['Driver Name', 'Driver Phone', 'Rider Name', 'Rider Phone', 'Pickup', 'DropOff', 'Price', 'Reason' ];
  records2 = new MatTableDataSource;
  segment: any;
  length: number = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  segmentModel = "default";
  public data: Data;
  public columns: any;
  public rows: any[];
  redy: number = 3;
  cancelledhistory: any;
  constructor(private nav: NavController, private chatService: AvatarService) { 
   
  }


  async ionViewDidEnter() {
    this.skeletOns = [
      {},{},{},{}
    ]

    this.hideSkeleton = true;
    this.triphistory = (this.chatService.getTrips())
    this.cancelledhistory = (this.chatService.getCancelledTrips())

    this.triphistory.subscribe((d)=>{
      console.log(d);
      this.records.data = d;
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
  })


  this.cancelledhistory.subscribe((d)=>{
    console.log(d)

     this.records2.data = d;
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
})

  }

  ngOnInit() {
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

  Increase(){
    
    if ( this.rows.length > this.redy){
    // this.redy++;
    this.rows.splice(2)
    }
  }

  Decrease(){
    this.rows.splice(0, this.rows.length)
  }

  goBack(){
    this.nav.pop();
  }
}
