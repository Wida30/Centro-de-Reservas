import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { PacesInterface } from 'src/app/places/paces-interface';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  // con el input treaemos los datos a esta pagina modal desde la pagina detalle y el boton de reserva

  @Input() selectedPlace!:PacesInterface;
  @Input() selectedMode!: 'selected' | 'random'

  @ViewChild('f', { static: true }) form!: NgForm;

  startDate!: string;
  endDate!: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    // const availableFrom = new Date(this.selectedPlace.availableFrom);
    // const availableTo = new Date(this.selectedPlace.availableTo);
    // if (this.selectedMode === 'random') {
    //   this.startDate = new Date(
    //     availableFrom.getTime() +
    //       Math.random() *
    //         (availableTo.getTime() -
    //           7 * 24 * 60 * 60 * 1000 -
    //           availableFrom.getTime())
    //   ).toISOString();

    //   this.endDate = new Date(
    //     new Date(this.startDate).getTime() +
    //       Math.random() *
    //         (new Date(this.startDate).getTime() +
    //           6 * 24 * 60 * 60 * 1000 -
    //           new Date(this.startDate).getTime())
    //   ).toISOString();
    // }
  }

  //en dismiss (cerrar el modal) se pasan los valores (null en caso de cancelar, y "mesaje de reserva" o un objeto con los datos en el caso de reservar), el rol ( 'cancel " y confirm" en este caso o cualquier otro que queramos) y un id del modal a cerrar en caso de tener varios

  onCancelReservation(){
    this.modalCtrl.dismiss(null, 'cancel')

  }
  onBookPlace() {
    if (!this.form|| !this.datesValid) {
      return;
    }

    this.modalCtrl.dismiss(
      {
        bookingData: {
          name: this.form.value['name'],
          lastName: this.form.value['last-name'],
          guests: +this.form.value['guests'],
          startDate: new Date (this.form.value['date-from']),
          endDate: new Date (this.form.value['date-to'])
        }
      },
      'confirm'
    );
  }

  datesValid() {
    const startDate = new Date(this.form.value['date-from']);
    const endDate = new Date(this.form.value['date-to']);
    return endDate > startDate;
  }

}
