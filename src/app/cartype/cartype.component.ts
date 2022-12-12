import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-cartype',
  templateUrl: './cartype.component.html',
  styleUrls: ['./cartype.component.scss'],
})
export class CartypeComponent implements OnInit {
  approve2: boolean = true;
  @Input() info;
  form: FormGroup;
  profileImage: any = '';
  constructor(private loadingController: LoadingController, private avatarService: AvatarService, private alertController: AlertController, public modalCtrl: ModalController) { }


  async ngOnInit() {
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


  async changeImage() {

    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera, // Camera, Photos or Prompt!
    });

    if (image) {
    

      this.profileImage = image;
    }
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }


  async processNow(){
    if (this.profileImage){
      
    const loading = await this.loadingController.create();
    await loading.present();
    const fk = await this.avatarService.CartypeSave(this.form.value.email, this.form.value.address, this.form.value.name);
    console.log(fk.id);

    const result = await this.avatarService.uploadCartype(this.profileImage, fk.id);
    loading.dismiss();
      
      this.modalCtrl.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }else{
      const alert = await this.alertController.create({
        header: 'Upload An Icon',
        message: 'No icon detected',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  

  async EditNow(){
      
    const loading = await this.loadingController.create();
    await loading.present();
    const fk = await this.avatarService.CartypeUpdate(this.info.id, this.form.value.email || this.info.name, this.form.value.address || this.info.surcharge, this.form.value.name || this.info.mileage);

    if (!this.profileImage){
    loading.dismiss();
      
    this.modalCtrl.dismiss();

    }

    if (this.profileImage){
    const result = await this.avatarService.uploadCartype(this.profileImage || this.info.image, this.info.id);
    loading.dismiss();
      
      this.modalCtrl.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
    
  }






}
