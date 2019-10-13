import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BannerComponent } from './componentes/banner/banner.component';
import { HomeComponent } from './componentes/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations:[BannerComponent, HomeComponent],
  imports: [HomeRoutingModule,CommonModule,SharedModule]
})
export class HomeModule{

}
