import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { IndexComponent } from "./index/index.component";
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'cadastro', component: RegisterComponent },
  { path: '*', component: IndexComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
