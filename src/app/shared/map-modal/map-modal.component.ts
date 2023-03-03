import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit {

  constructor(private modalCrt: ModalController) { }

  ngOnInit() {}

  onCancel () {
    this.modalCrt.dismiss();
  }
}
