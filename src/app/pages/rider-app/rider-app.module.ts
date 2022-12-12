import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiderAppPageRoutingModule } from './rider-app-routing.module';

import { RiderAppPage } from './rider-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiderAppPageRoutingModule
  ],
  declarations: [RiderAppPage]
})
export class RiderAppPageModule {}
