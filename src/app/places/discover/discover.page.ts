import { PacesServiceService } from './../paces-service.service';
import { Component, OnInit } from '@angular/core';
import { PacesInterface } from '../paces-interface';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces!: PacesInterface[];

  constructor( private placesService : PacesServiceService) { }

  ngOnInit() {

    this.loadedPlaces = this.placesService.getPlaces()



  }

  onFilterUpdate(event:any){
    console.log(event.detail);


  }

}
