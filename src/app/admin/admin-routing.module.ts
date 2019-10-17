import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [ 
  {path: '', component: NavComponent, children:[
    {path: 'dashboard', component: DashboardComponent },
    {path: 'create', component: ProductFormComponent },
    {path: 'table', component: TableComponent },
    {path: 'product', component: ProductsListComponent },
    {path: 'product/create', component: FormProductComponent },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
