import { Component , OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Cars } from '../cars';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})
export class RentalDetailsComponent implements OnInit {
  fourCars: Cars[] = [];
  id = '';
  constructor(private service:CarsService , private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
    })
    this.service.getFourCars().subscribe({
      next : (res)=>{
        this.fourCars = res;
      }
    })
  }
}
