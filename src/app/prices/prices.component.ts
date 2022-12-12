import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent implements OnInit {

  approve2: boolean = true;
  @Input() info;
  form: FormGroup;
  constructor(private loadingController: LoadingController, private avatarService: AvatarService, private alertController: AlertController, public modalCtrl: ModalController) { }


  async ngOnInit() {
    console.log(this.info);
    this.form = new FormGroup({
 
      email: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(30)]
      }),
      address: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(30)]
      }),
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(30)]
      }),
    });
  }


  closeModal(){
    this.modalCtrl.dismiss();
  }


  async processNow(){
      
    const loading = await this.loadingController.create();
    await loading.present();
    const fk = await this.avatarService.PriceSave(this.form.value.email, this.form.value.address);
    await this.avatarService.PriceUpdate(this.form.value.email, this.form.value.address, fk.id);
    
    loading.dismiss();
      
    this.modalCtrl.dismiss();
  }

  

  async EditNow(){
      
    const loading = await this.loadingController.create();
    await loading.present();
    const fk = await this.avatarService.PriceUpdate(this.form.value.email || this.info.name, this.form.value.address || this.info.amount, this.info.id);

    loading.dismiss();
      
    this.modalCtrl.dismiss();
  }
}
