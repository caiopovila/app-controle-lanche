import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list'; 
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatChipsModule } from '@angular/material/chips';

import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogProductComponent, DialogProductEditComponent } from './dialog-product/dialog-product.component';
import { DialogItemComponent, DialogItemProdComponent } from './dialog-item/dialog-item.component';
import { DialogProviderComponent, DialogProviderEditComponent } from './dialog-provider/dialog-provider.component';
import { DialogClientComponent, DialogClientEditComponent, DialogClientEndComponent } from './dialog-client/dialog-client.component';
import { DialogAdressComponent } from './dialog-adress/dialog-adress.component';
import { DialogCostsComponent, DialogCostsEditComponent } from './dialog-costs/dialog-costs.component';
import { DialogEmployeeComponent, DialogEmployeeEditComponent } from './dialog-employee/dialog-employee.component';
import { DialogSaleComponent, DialogAddItemSaleComponent } from './dialog-sale/dialog-sale.component';
import { DialogFreightComponent, DialogUpFreightComponent } from './dialog-freight/dialog-freight.component';
import { DialogInfoBusinessComponent, DialogNewAdressBusinessComponent, DialogUpAdressBusinessComponent } from './dialog-info-business/dialog-info-business.component';



@NgModule({
  declarations: [
    DialogItemComponent,
    DialogItemProdComponent,
    DialogConfirmComponent,
    DialogProductComponent,
    DialogProductEditComponent,
    DialogProviderComponent,
    DialogProviderEditComponent,
    DialogClientComponent,
    DialogClientEditComponent,
    DialogClientEndComponent,
    DialogAdressComponent,
    DialogCostsComponent,
    DialogCostsEditComponent,
    DialogEmployeeComponent,
    DialogEmployeeEditComponent,
    DialogSaleComponent,
    DialogFreightComponent,
    DialogUpFreightComponent,
    DialogAddItemSaleComponent,
    DialogInfoBusinessComponent,
    DialogUpAdressBusinessComponent,
    DialogNewAdressBusinessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    MatTooltipModule,
    MatListModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatChipsModule,
    ReactiveFormsModule
  ]
})
export class DialogsModule { }