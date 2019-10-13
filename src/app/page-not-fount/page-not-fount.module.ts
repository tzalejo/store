import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFountRoutingModule } from './page-not-fount-routing.module';

import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { SharedModule } from './../shared/shared.module';
@NgModule({
  declarations: [ PageNotFountComponent ],
  imports: [
    CommonModule,
    PageNotFountRoutingModule,
    SharedModule
  ]
})
export class PageNotFountModule { }
