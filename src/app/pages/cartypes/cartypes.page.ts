import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ModalOptions } from '@ionic/angular';
import { CartypeComponent } from 'src/app/cartype/cartype.component';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-cartypes',
  templateUrl: './cartypes.page.html',
  styleUrls: ['./cartypes.page.scss'],
})
export class CartypesPage implements OnInit {
  triphistory: any;
  hasNoData: boolean;
  hideSkeleton: boolean;
  cartypes: any [];
  skeletOns: {}[];
  constructor(private chatService: AvatarService, public loadingController: LoadingController, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.skeletOns = [
      {},{},{},{}
    ]

    this.hideSkeleton = true;
    this.triphistory = (this.chatService.getCartypes())
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
      component: CartypeComponent,
      componentProps: {
        info: item,
      },
      swipeToClose: true
    };
    const modal = this.modalCtrl.create(options);
    (await modal).present();
    const data: any = (await modal).onWillDismiss();
  }



  async AddCartype(){
    const options: ModalOptions = {
      component: CartypeComponent,
      swipeToClose: true
    };
    const modal = this.modalCtrl.create(options);
    (await modal).present();
    const data: any = (await modal).onWillDismiss();

  }

  async Delete(item){
    const loading = await this.loadingController.create();
    await loading.present();
    this.chatService.CartypeDelete(item.id)
    loading.dismiss();
  }

}
