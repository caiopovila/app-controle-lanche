import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge'; 

import { ItemsTableComponent } from "./items-table/items-table.component";
import { TableComponent } from './items-table/table/table.component';
import { ItemDetComponent } from './item-det/item-det.component';

@NgModule({
  declarations: [
    ItemsTableComponent,
    TableComponent,
    ItemDetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatBadgeModule
  ]
})
export class ItemsModule { }
