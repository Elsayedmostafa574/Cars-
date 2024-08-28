import { Component , OnInit} from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Cars } from '../home/cars';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  allCars:Cars[] = [];
  constructor( private service:CarsService , private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((res)=>{
      console.log(res);
      
    })
    this.getAllCars();
  }
  getAllCars() : void{
    this.service.getAllCars().subscribe({
      next : (res)=>{
        this.allCars = res;
      }
    })
  }
}
