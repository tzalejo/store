import { HomeComponent } from './componentes/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes : Routes =[
  {path:'',component: HomeComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
