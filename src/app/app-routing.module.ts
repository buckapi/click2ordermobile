import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  
  { path: 'c2oAll', loadChildren: () => import('./components/c2oAll/c2o-all.module').then(m => m.C2oAllModule) },
  
  { path: 'c2oOrders', loadChildren: () => import('./components/c2oOrders/c2o-orders.module').then(m => m.C2oOrdersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
