import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SigupComponent } from './sigup/sigup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path:'services',component:ServicesComponent},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SigupComponent},
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
