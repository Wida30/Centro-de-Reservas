
import { BookingModel } from './booking-model';
import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from './booking-service.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookins',
  templateUrl: './bookins.page.html',
  styleUrls: ['./bookins.page.scss'],
})
export class BookinsPage implements OnInit {

  bookings!: BookingModel[]

  constructor( private bookingService: BookingServiceService) { }

  ngOnInit() {

    this.bookings = this.bookingService.newBook
  }

  ionViewWillEnter() {

    this.bookings = this.bookingService.newBook
     console.log( 'datos que llegan desde la reserva:  ' + JSON.stringify( this.bookings))
  }

  onCancelBooking(id: string, slidingBooking: IonItemSliding){
    slidingBooking.close()
    this.bookingService.cancelBooking(id)


  }

}
