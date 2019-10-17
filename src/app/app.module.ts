import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// para manejo api..
import { HttpClientModule } from '@angular/common/http';
// import { HomeComponent } from './components/home/home.component';
// import { ContactComponent } from './contact/components/contact.component';
// import { DemoComponent } from './demo/components/demo/demo.component';

// import { BannerComponent } from './components/home/componentes/banner/banner.component';
// import { PageNotFountComponent } from './page-not-fount/components/page-not-fount/page-not-fount.component';
import { LayoutComponent } from './layout/layout.component';

// componentes conpartidos..(foote, header , pipes etc)
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [

    // ContactComponent,
    // DemoComponent,
    // PageNotFountComponent,

    // ProductComponent,
    // ProductsComponent,
    // ProductDetailComponent,

    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
