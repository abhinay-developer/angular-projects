import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { SigupComponent } from './sigup/sigup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
     AppComponent,
     HeaderComponent,
     FooterComponent,
     SectionComponent,
     AboutComponent,
     ContactComponent,
     LoginComponent,
     ServicesComponent,
     SigupComponent,
     HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
