import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
{ path:'', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  
  { path: 'c2oAll', loadChildren: () => import('./components/c2oAll/c2o-all.module').then(m => m.C2oAllModule) },
  
  { path: 'c2oOrders', loadChildren: () => import('./components/c2oOrders/c2o-orders.module').then(m => m.C2oOrdersModule) },
  
{ path: 'apidocs', loadChildren: () => import('./components/apidocs/apidocs.module').then(m => m.ApidocsModule) },
  
{ path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
