import { ProductsComponent } from './components/products/products.component';
// import { HomeComponent } from './components/home/componentes/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  {path: '' ,component:LayoutComponent,  children:[

    {path: '' ,redirectTo: 'home',pathMatch: 'full',},
    {path: 'home' ,loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
    {path: 'products', component: ProductsComponent},
    {path: 'contacts', component: ContactComponent},
    {path: 'products/:id', component: ProductDetailComponent },

  ]},
  {path: 'demo', component: DemoComponent },
  {path: '**', component:  PageNotFountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules})], // escogemos 
  exports: [RouterModule]
})
export class AppRoutingModule { }
