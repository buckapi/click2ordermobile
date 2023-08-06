import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C2oAllRoutingModule } from './c2o-all-routing.module';
import { C2oAllComponent } from './c2o-all.component';


@NgModule({
  declarations: [
    C2oAllComponent
  ],
  imports: [
    CommonModule,
    C2oAllRoutingModule
  ]
})
export class C2oAllModule { }
