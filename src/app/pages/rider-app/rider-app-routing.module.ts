import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiderAppPage } from './rider-app.page';

const routes: Routes = [
  {
    path: '',
    component: RiderAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderAppPageRoutingModule {}
