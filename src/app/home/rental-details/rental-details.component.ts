import { Component , OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Cars } from '../cars';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})
export class RentalDetailsComponent implements OnInit {
  fourCars: Cars[] = [];
  constructor(private service:CarsService){}

  ngOnInit(): void {
    this.service.getFourCars().subscribe({
      next : (res)=>{
        this.fourCars = res;
      }
    })
  }
}
