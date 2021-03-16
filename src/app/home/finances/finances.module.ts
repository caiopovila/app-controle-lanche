import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider'; 

import { CostsComponent } from './costs/costs.component';
import { EmployesComponent } from './employes/employes.component';



@NgModule({
  declarations: [CostsComponent, EmployesComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class FinancesModule { }
