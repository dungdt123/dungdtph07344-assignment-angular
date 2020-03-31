import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Er404Component } from './er404/er404.component';
import { CodesComponent } from './codes/codes.component';
import { AboutComponent } from './about/about.component';
import { MailComponent } from './mail/mail.component';
import { ProductsComponent } from './products/products.component';
import { Products2Component } from './products2/products2.component';
import { Products1Component } from './products1/products1.component';
import { AdminComponent } from './admin/admin.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Er404Component,
    CodesComponent,
    AboutComponent,
    MailComponent,
    ProductsComponent,
    Products2Component,
    Products1Component,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[ProductService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
