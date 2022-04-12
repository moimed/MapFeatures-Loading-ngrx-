import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { toursReducer } from './state/tours.reducer';
import { TourComponent } from './components/tour/tour.component';



@NgModule({
  declarations: [
    TourComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      'tours', toursReducer
    ),
  ],
  exports: [
    TourComponent
  ]
})
export class ToursModule { }
