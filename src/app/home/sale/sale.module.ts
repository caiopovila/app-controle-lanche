import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { RegistersComponent } from './registers/registers.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { FreightComponent } from './orders/freight/freight.component';
import { OrdersPendingComponent } from './orders/orders-pending/orders-pending.component';
import { FreightListComponent } from './orders/freight/freight-list/freight-list.component';
import { FreightSelectComponent } from './orders/freight/freight-select/freight-select.component';



@NgModule({
  declarations: [
    RegistersComponent,
    OrdersComponent,
    NewOrderComponent,
    FreightComponent,
    OrdersPendingComponent,
    FreightListComponent,
    FreightSelectComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatBottomSheetModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatChipsModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule
  ]
})
export class SaleModule { }
