import { PacesInterface } from './../paces-interface';
import { Component, OnInit } from '@angular/core';
import { PacesServiceService } from '../paces-service.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaces!: PacesInterface[];

  constructor(private placesService: PacesServiceService) { }

  ngOnInit() {

    this.loadedPlaces = this.placesService.getPlaces()
  }

}
