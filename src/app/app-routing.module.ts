import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { RentalDetailsComponent } from './home/rental-details/rental-details.component';
import { WorksComponent } from './home/works/works.component';
import { ChooseUsComponent } from './home/choose-us/choose-us.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { ContactComponent } from './home/contact/contact.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  {
    path: 'header' , component: HeaderComponent
  },
  {
    path: '' , redirectTo: 'header' , pathMatch: 'full'
  },
  {
    path: 'rental' , component: RentalDetailsComponent
  },
  {
    path: 'works' , component: WorksComponent
  },
  {
    path: 'chooseUs' , component: ChooseUsComponent
  },
  {
    path: 'testimonials' , component: TestimonialsComponent
  },
  {
    path: 'contact' , component: ContactComponent
  },
  {
    path: 'allCars' , component: CarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
