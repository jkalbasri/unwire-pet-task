import { Component, OnInit } from '@angular/core';
// Importing thing we need 
import { PetsDataService } from "../../services/pets-data.service"

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  // Variables 
  model: boolean = false;
  orderModel: boolean = false;
  name: string = "";
  status: string = "";
  id: number = 0;
  pets: any;
  imagePath: string = "./assets/image.jpg"
  orderData: any = null
  // Constructor
  constructor(private petsData: PetsDataService) {
    // Calling get pets service 
    this.petsData.pets().subscribe((data) => {
      //  This will return number of pets we want to show curruntly we are showing 20 
      this.pets = Object.values(data).slice(0, 20);;
    })
  }

  // Functions 

  // This function will show model[popup] 
  showModel(e: any, data: any) {
    // Getting data value from choosen pet 
    this.name = data.name;
    this.status = data.status;
    this.id = data.id;
    // Changing model value 
    this.model = true
  }
  // This function will hide model[popup]
  hideModel(e: any) {
    // Setting variables to there default values 
    this.name = "";
    this.status = "";
    this.id = 0;
    // Changing model value 
    this.model = false
  }
  hideOrderModel() {
    // Changing model value 
    this.orderModel = false
  }
  // This function will but choosen pet 
  buyPet() {
    const filterData = {
      "id": Date.now(),
      "petId": this.id,
      "quantity": "1",
      "shipDate": Date.now(),
      "status": this.status,
      "complete": "true"
    }
    // Calling buy pet services 
    this.petsData.buyPet(filterData).subscribe((data: any) => {
      // Changing orderdata value 
      this.orderData = data
        // Changing model value 
      this.model = false
        // Changing orderModel value 
      this.orderModel = true
    })
  }

  ngOnInit(): void {
  }

}
