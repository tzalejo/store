
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFountComponent } from './page-not-fount/components/page-not-fount/page-not-fount.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

// import { DemoComponent } from './demo/components/demo/demo.component';
// import { ProductsComponent } from './product/components/products/products.component';
// import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
// import { HomeComponent } from './components/home/componentes/home/home.component';
// import { ContactComponent } from './contact/components/contact.component';

const routes: Routes = [
  {path: '' ,component:LayoutComponent,  children:[

    {path: '' ,redirectTo: 'home',pathMatch: 'full' },
    {path: 'home' ,loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

    // {path: 'products', component: ProductsComponent},
    // {path: 'products/:id', component: ProductDetailComponent },
    {path: 'products', canActivate: [AdminGuard] ,loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },

    {path: 'contacts', canActivate: [AdminGuard] ,loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },

    {path: 'demo', canActivate: [AdminGuard] , loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  ]},
  {path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '**', loadChildren: ()=> import('./page-not-fount/page-not-fount.module').then(m => m.PageNotFountModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules})], // escogemos
  exports: [RouterModule]
})
export class AppRoutingModule { }
