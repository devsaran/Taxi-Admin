import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { PayoutPageRoutingModule } from './payout-routing.module';
import {MatTableModule} from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PayoutPage } from './payout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayoutPageRoutingModule,
     NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
  ],
  declarations: [PayoutPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PayoutPageModule {}
