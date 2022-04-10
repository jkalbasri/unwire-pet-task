import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importing thing we need 
import { AddNewPetComponent } from "./pages/add-new-pet/add-new-pet.component"
import { HomeComponent } from "./pages/home/home.component"

const routes: Routes = [
  // Adding page path 
  { path: "addnewpet", component: AddNewPetComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
