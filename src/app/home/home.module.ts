import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeComponent } from "./home.component";
import { MenuComponent } from './menu/menu.component';
import { ConfigComponent } from './config/config.component';

import { SaleModule } from './sale/sale.module';
import { ClientModule } from './client/client.module';
import { ItemsModule } from './items/items.module';
import { HomeRoutingModule } from './home-routing.module';
import { StockModule } from './stock/stock.module';
import { FinancesModule } from './finances/finances.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';  
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

import { LoaderService } from '../loader/loader.service';
import { InterceptorsLoaderService } from '../loader/interceptors-loader.service';
import { BusiInfoComponent } from './config/busi-info/busi-info.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    ConfigComponent,
    BusiInfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ItemsModule,
    StockModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    ClientModule,
    FinancesModule,
    SaleModule,
    MatCardModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorsLoaderService, multi: true }
  ]
})
export class HomeModule { }