import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  ActionSheetController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookins/create-booking/create-booking.component';
import { PacesInterface } from '../../paces-interface';
import { PacesServiceService } from '../../paces-service.service';

@Component({
  selector: 'app-detailplace',
  templateUrl: './detailplace.page.html',
  styleUrls: ['./detailplace.page.scss'],
})
export class DetailplacePage implements OnInit {
  place!: PacesInterface;
  result!: string;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PacesServiceService,
    private modalCrtl: ModalController,
    private actionSheetCrt: ActionSheetController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getplace(paramMap.get('placeId')!);
    });
  }

  onBookPlace() {
    this.actionSheetCrt.create({
      header: 'SELECIONA UNA FECHA',
      buttons: [
        {
          text: 'Elige fecha',
          handler: () => {
            this.openBookingModal('select');
          },
        },
        {
          text: 'Fecha aleatoria',
          handler:() =>{
            this.openBookingModal('random')
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    }).then( actionSheetEl => {
      actionSheetEl.present();
    });


  }

   // create: crea el componente donde le pasamos el componente o modal creado y mas propiedades, en este caso componentProps con los datos del luegar a reservar (Place) en forma de Key:value y asi usarlos en el componente original

    // Present: muestra el componente modal

    //onDidDismiss: cuando cerramos el modal nos traemos los valores de la funcion cuando hemos clicado el boton de reservar

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);

    this.modalCrtl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place, selectedMode: mode },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resulData) => {
        console.log(resulData);
        if (resulData.role === 'confirm') {
          console.log('reservado!!');
        }
      });
  }
}
