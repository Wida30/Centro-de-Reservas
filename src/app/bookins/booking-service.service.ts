import { IonItemSliding } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthserviceService } from '../auth/authservice.service';
import { BookingModel } from './booking-model';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  public bookings!: BookingModel[];

newBook: BookingModel[] = [];

//  private _bookings = new BehaviorSubject<BookingModel[]>([])


  constructor( private authService : AuthserviceService) {


  }

  // get bookings () {
  //   return this._bookings.asObservable();
  // }



  addBooking(
    placeID: string,
    placeTitle: string,
    placeImage: string,
    firstName: string,
    lastName: string,
    guestNumer: number,
    dateFrom: Date,
    dateTo:Date,
  ){
    const newBooking : BookingModel ={

      id: Math.random().toString(),
      placeId: placeID,
      userId: this.authService.userID,
      placeTitle: placeTitle,
      placeImage: placeImage,
      firstName: firstName,
      lastName: lastName,
      guests: guestNumer,
      dateFrom: dateFrom,
      dateTo: dateTo
    }
    this.newBook.push(newBooking)

  }

  cancelBooking(bookingId:string){


  }

}
