import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController, ModalOptions } from '@ionic/angular';
import { DocumentsComponent } from 'src/app/documents/documents.component';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

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
    this.triphistory = (this.chatService.getDocuments())
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
      component: DocumentsComponent,
      componentProps: {
        info: item,
      },
      swipeToClose: true
    };
    const modal = this.modalCtrl.create(options);
    (await modal).present();
    const data: any = (await modal).onWillDismiss();
  }


  async AddDoc(){
    const options: ModalOptions = {
      component: DocumentsComponent,
      swipeToClose: true
    };
    const modal = this.modalCtrl.create(options);
    (await modal).present();
    const data: any = (await modal).onWillDismiss();
  }

  async Delete(item){
    const loading = await this.loadingController.create();
    await loading.present();
    this.chatService.DocumentDelete(item.id)
    loading.dismiss();
  }

}
