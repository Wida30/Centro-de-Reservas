import { PacesInterface } from './../paces-interface';
import { Component, OnInit } from '@angular/core';
import { PacesServiceService } from '../paces-service.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaces!: PacesInterface[];


  constructor(private placesService: PacesServiceService,
    private router: Router) { }

  ngOnInit() {

    this.loadedPlaces = this.placesService.getPlaces()
  }

  ionViewWillEnter(){

    this.loadedPlaces =  this.placesService.getPlaces()
    //  this.placesService.fetchPlaces().subscribe()

  }

  onEditOffer(Id: string, sliding: IonItemSliding){
    sliding.close();
    this.router.navigate(['/', 'places', 'tabs','offers', 'edit', Id])

    console.log('editar' + Id)
  }

}
