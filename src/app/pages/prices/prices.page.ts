import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ModalOptions } from '@ionic/angular';
import { CartypeComponent } from 'src/app/cartype/cartype.component';
import { PricesComponent } from 'src/app/prices/prices.component';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.page.html',
  styleUrls: ['./prices.page.scss'],
})
export class PricesPage implements OnInit {
  skeletOns: {}[];
  hideSkeleton: boolean;
  triphistory: any;
  cartypes: any;
  hasNoData: boolean;
  constructor(private chatService: AvatarService, public loadingController: LoadingController, public modalCtrl: ModalController) { }


  ngOnInit() {
    this.skeletOns = [
      {},{},{},{}
    ]

    this.hideSkeleton = true;
    this.triphistory = (this.chatService.getPrices())
    this.triphistory.subscribe((d)=>{

      console.log(d);

     this.cartypes =d;
      if (d.length == 0){
        this.hasNoData = true;
        this.hideSkeleton = false;
      }else{
        this.hideSkeleton = false;
        this.hasNoData = false;
      }
  })
  }


  async EditBtn(item){
    console.log(item);
    const options: ModalOptions = {
      component: PricesComponent,
      componentProps: {
        info: item,
      },
      swipeToClose: true
    };
    const modal = this.modalCtrl.create(options);
    (await modal).present();
    const data: any = (await modal).onWillDismiss();
  }



  async AddPrice(){
    const options: ModalOptions = {
      component: PricesComponent,
      swipeToClose: true
    };
    const modal = this.modalCtrl.create(options);
    (await modal).present();
    const data: any = (await modal).onWillDismiss();

  }

  async Delete(item){
    const loading = await this.loadingController.create();
    await loading.present();
    this.chatService.PriceDelete(item.id)
    loading.dismiss();
  }

}

