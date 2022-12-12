import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartypesPage } from './cartypes.page';

const routes: Routes = [
  {
    path: '',
    component: CartypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartypesPageRoutingModule {}
