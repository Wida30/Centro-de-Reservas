import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Component({
  selector: 'app-pick-location',
  templateUrl: './pick-location.component.html',
  styleUrls: ['./pick-location.component.scss'],
})
export class PickLocationComponent implements OnInit {

  constructor(private modalCrt: ModalController, private http: HttpClient) { }

  ngOnInit() {}

  onPickLocation() {
    this.modalCrt.create({ component: MapModalComponent }).then(modalEl => {
      modalEl.onDidDismiss().then(modalData => {
        if (!modalData.data) {
          return;
        }
        this.getAddress(modalData.data.lat, modalData.data.lng).subscribe(
          address => {
            console.log(address);
          }
        );
      });
      modalEl.present();
    });
  }

  private getAddress(lat: number, lng: number) {
    return this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
          environment.googleMapsKey
        }`
      )
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || geoData.results.length === 0) {
            return null;
          }
          return geoData.results[0].formatted_address;
        })
      );
  }

}
