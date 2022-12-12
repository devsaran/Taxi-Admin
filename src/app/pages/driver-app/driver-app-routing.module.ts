import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverAppPage } from './driver-app.page';

const routes: Routes = [
  {
    path: '',
    component: DriverAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverAppPageRoutingModule {}
