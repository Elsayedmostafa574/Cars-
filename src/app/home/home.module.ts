import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { WorksComponent } from './works/works.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RentalDetailsComponent,
    WorksComponent,
    ChooseUsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    FormsModule,
]
})
export class HomeModule { }
