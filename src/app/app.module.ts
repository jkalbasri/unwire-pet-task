import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PetsComponent } from './components/pets/pets.component';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';
import { AddNewPetComponent } from './pages/add-new-pet/add-new-pet.component';
import { HomeComponent } from './pages/home/home.component'
// Importing things we need and then adding into import array 
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PetsComponent,
    LoadingAnimationComponent,
    AddNewPetComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
