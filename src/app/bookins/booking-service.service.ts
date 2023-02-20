import { Injectable } from '@angular/core';
import { BookingModel } from './booking-model';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

 bookings: BookingModel[];



  constructor() {

    this.bookings =[
      {
        id: 'bk-1',
        placeId: 'MAD01',
        userId:'LML09',
        placeTitle: 'Madrid',
        guest: 4,
      }
    ]
  }
}
