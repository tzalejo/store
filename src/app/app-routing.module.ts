import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home' ,component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'contacts', component: ContactComponent},
  {path: 'demo', component: DemoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
