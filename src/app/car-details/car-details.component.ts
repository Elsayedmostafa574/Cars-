import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../services/cars.service';
import { Cars } from '../home/cars';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit{
  id = '';
  carDetails! : Cars;
  constructor( private route : ActivatedRoute , private service : CarsService){}

  ngOnInit(): void {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      this.getCarById()
    })
    
  }
  getCarById() : void{
    this.service.getCarById(this.id).subscribe({
      next : (res) =>{
        debugger
        this.carDetails = res;
      }
    })
  }

}
