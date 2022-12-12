import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverAppPageRoutingModule } from './driver-app-routing.module';

import { DriverAppPage } from './driver-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverAppPageRoutingModule
  ],
  declarations: [DriverAppPage]
})
export class DriverAppPageModule {}
