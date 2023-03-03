import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PacesInterface } from './../../paces-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PacesServiceService } from '../../paces-service.service';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.page.html',
  styleUrls: ['./editoffer.page.scss'],
})
export class EditofferPage implements OnInit {
  place!: PacesInterface;
  form!: FormGroup;

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


      this.form = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.place.description, {
          updateOn:'blur',
          validators: [Validators.required]
        })
      })


    });
  }

  onEdit() {
    this.navCtr.navigateBack('/places/tabs/offers');
  }

  onEditAloj(){
    if (!this.form.valid){
      return;
    }
    console.log(this.form);

  }
}
