import { Component, OnInit } from '@angular/core';
import { PetsDataService } from "../../services/pets-data.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-pet',
  templateUrl: './add-new-pet.component.html',
  styleUrls: ['./add-new-pet.component.scss']
})
export class AddNewPetComponent implements OnInit {

  // Constructor 
  constructor(private petsData: PetsDataService, private router: Router) { }

  // Functions 
  submit(data: any) {
    if (data.name === "") return

    const filterData = {
      id: Date.now(),
      name: data.name,
      status: data.status
    }

    this.petsData.addPet(filterData).subscribe((data) => {
      this.router.navigate(['/']);
    })

  }

  ngOnInit(): void {
  }

}
