import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from "./home/home.module";
import { DialogsModule } from "./dialogs/dialogs.module";

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LogoIndexComponent } from './logo-index/logo-index.component';
import { LoaderComponent } from './loader/loader.component';

import { LoaderService } from './loader/loader.service';
import { InterceptorsLoaderService } from './loader/interceptors-loader.service';
import { PaginatorCustom } from "./paginator-custom";
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LogoIndexComponent,
    LoaderComponent,
    IndexComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DialogsModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorsLoaderService, multi: true },
    { provide: MatPaginatorIntl, useValue:  PaginatorCustom() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
