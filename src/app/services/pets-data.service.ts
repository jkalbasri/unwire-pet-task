import { Injectable } from '@angular/core';
// Importing things we need 
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PetsDataService {

  // Variables 
  getUrl = "https://petstore.swagger.io/v2/pet/findByStatus?status=available";
  addPetUrl = "https://petstore.swagger.io/v2/pet";
  buyPetUrl = "https://petstore.swagger.io/v2/store/order";

  // Constructor 
  constructor(private http: HttpClient) { }

  // Functions 

  // This function will return pet data 
  pets() {
    // Getting data from Api 
    return this.http.get(this.getUrl)
  };
  // This function will add new pet 
  addPet(data: any) {
    // Inserting new data into Api
    return this.http.post(this.addPetUrl, data);
  }
  // This function will buy pet from api 
  buyPet(data: any) {
    // Buying pet from Api 
    return this.http.post(this.buyPetUrl, data);
  }

}
