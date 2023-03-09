import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacesServiceService } from '../../paces-service.service';

@Component({
  selector: 'app-newoffer',
  templateUrl: './newoffer.page.html',
  styleUrls: ['./newoffer.page.scss'],
})
export class NewofferPage implements OnInit {
  form!: FormGroup


  constructor(private placeService: PacesServiceService,
      private router: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description:new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price:new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      dateFrom:new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo:new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  onCreateAlj(){

    console.log(this.form);

    this.placeService.addPlace(
      this.form.value.title,
      this.form.value.description,
      +this.form.value.price,
      new Date (this.form.value.dateFrom),
      new Date (this.form.value.dateTo)
    )
    this.form.reset()
    this.router.navigate(['/places/tabs/offers'])
    console.log('lugar añadido')

  }

}
