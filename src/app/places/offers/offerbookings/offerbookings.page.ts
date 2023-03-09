import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PacesInterface } from '../../paces-interface';
import { PacesServiceService } from '../../paces-service.service';

@Component({
  selector: 'app-offerbookings',
  templateUrl: './offerbookings.page.html',
  styleUrls: ['./offerbookings.page.scss'],
})
export class OfferbookingsPage implements OnInit {
  place!: PacesInterface;

  constructor(
    private route: ActivatedRoute,
    private navCtrl:NavController,
    private placeService: PacesServiceService ) { }



  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return
      }
        this.place = this.placeService.getplace(paramMap.get('placeId')!)
    });



  }

}
