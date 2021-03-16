import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon'; 
import { MatTooltipModule } from '@angular/material/tooltip';

import { ProductComponent } from './product/product.component';
import { ListComponent } from './product/list/list.component';
import { ProviderComponent } from './provider/provider.component';
import { ProviderTableComponent } from './provider/provider-table/provider-table.component';


@NgModule({
  declarations: [
    ProductComponent,
    ListComponent,
    ProviderComponent,
    ProviderTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatIconModule
  ]
})
export class StockModule { }
