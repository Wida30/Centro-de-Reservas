import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PacesInterface } from '../../paces-interface';
import { PacesServiceService } from '../../paces-service.service';

@Component({
  selector: 'app-detailplace',
  templateUrl: './detailplace.page.html',
  styleUrls: ['./detailplace.page.scss'],
})
export class DetailplacePage implements OnInit {
  place!: PacesInterface

  constructor(private route:ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PacesServiceService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover')
        return
      }
      this.place = this.placeService.getplace(paramMap.get('placeId')!)
    })
  }

  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover')
    this.navCtrl.navigateBack('/places/tabs/discover')

  }

}
