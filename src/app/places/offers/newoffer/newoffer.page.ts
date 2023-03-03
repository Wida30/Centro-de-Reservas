import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newoffer',
  templateUrl: './newoffer.page.html',
  styleUrls: ['./newoffer.page.scss'],
})
export class NewofferPage implements OnInit {
  form!: FormGroup


  constructor() { }

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

  }

}
