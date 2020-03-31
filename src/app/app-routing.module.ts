import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Er404Component } from './er404/er404.component';
import { AboutComponent } from './about/about.component';
import { MailComponent } from './mail/mail.component';
import { ProductsComponent } from './products/products.component';
import { Products2Component } from './products2/products2.component';
import { Products1Component } from './products1/products1.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'home',component :HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'about',component : AboutComponent},
  {path:'mail',component:MailComponent},
  {path:'products',component:ProductsComponent},
  {path:'products2',component:Products2Component},
  {path:'products1',component:Products1Component},
  
  {path:'404',component :Er404Component},
  {path:'**',redirectTo:'404',pathMatch:'full'},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
