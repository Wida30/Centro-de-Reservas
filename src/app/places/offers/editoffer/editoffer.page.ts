import { PacesInterface } from './../../paces-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PacesServiceService } from '../../paces-service.service';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.page.html',
  styleUrls: ['./editoffer.page.scss'],
})
export class EditofferPage implements OnInit {
  place!: PacesInterface;

  constructor(
    private route: ActivatedRoute,
    private navCtr: NavController,
    private placeService: PacesServiceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtr.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placeService.getplace(paramMap.get('placeId')!);
    });
  }

  onEdit() {
    this.navCtr.navigateBack('/places/tabs/offers');
  }
}
