import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AdditemComponent } from './additem/additem.component';

const routes: Routes = [{path:'Home',component:HomeComponent},
{ path: '', redirectTo: '/Register', pathMatch: 'full' },
{path:'Contact',component:ContactComponent},
{path:'Cart',component:CartComponent},
{path:'Login',component:LoginComponent},
{path:'Register',component:RegisterComponent},
{path:'Admin',component:AdminComponent},
{path:'update',component:UpdateproductComponent},
{path:'additem',component:AdditemComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
