import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MapModalComponent } from '../../map-modal/map-modal.component';

@Component({
  selector: 'app-pick-location',
  templateUrl: './pick-location.component.html',
  styleUrls: ['./pick-location.component.scss'],
})
export class PickLocationComponent implements OnInit {

  constructor(private modalCrt: ModalController) { }

  ngOnInit() {}

  onPickLocation() {

    this.modalCrt.create({component:MapModalComponent}). then(modalEl => {modalEl.present();})
  }

}
