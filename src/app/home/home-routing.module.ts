import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';

import { HomeComponent } from "./home.component";
import { ItemsTableComponent } from './items/items-table/items-table.component';
import { ItemDetComponent } from './items/item-det/item-det.component';
import { ProductComponent } from './stock/product/product.component';
import { ProviderComponent } from './stock/provider/provider.component';
import { TableClientComponent } from './client/table-client/table-client.component';
import { CostsComponent } from './finances/costs/costs.component';
import { EmployesComponent } from './finances/employes/employes.component';
import { RegistersComponent } from './sale/registers/registers.component';
import { OrdersComponent } from './sale/orders/orders.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent,
  canActivate: [AuthGuard],
    children: [
      { path: '',
        children: [
          { path: 'itens', component: ItemsTableComponent },
          { path: 'item/:idItem', component: ItemDetComponent },
          { path: 'produtos', component: ProductComponent },
          { path: 'fornecedores', component: ProviderComponent },
          { path: 'clientes', component: TableClientComponent },
          { path: 'custos', component: CostsComponent },
          { path: 'funcionarios', component: EmployesComponent },
          { path: 'vendas', component: RegistersComponent },
          { path: 'pedidos', component: OrdersComponent },
          { path: 'configuracao', component: ConfigComponent }
        ]
      }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }