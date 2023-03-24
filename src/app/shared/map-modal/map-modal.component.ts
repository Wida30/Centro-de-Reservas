import { map } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit {
  @ViewChild('map', { static: false })
  mapElementRef!: ElementRef;

  constructor(private modalCrt: ModalController, private renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit(): void {

    this.getGoogleMaps()
      .then(googleMaps => {
        const mapEl = this.mapElementRef.nativeElement;
        const map = new googleMaps.Map(mapEl, {
          center: { lat: 40.864571, lng: -3.486065 },
          zoom: 10        });

        googleMaps.event.addListenerOnce(map, 'idle', () => {
          this.renderer.addClass(mapEl, 'visible');
        });

        map.addListener('click', (event: { latLng: { lat: () => any; lng: () => any; }; }) => {
          const selectedCoords = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          };
          this.modalCrt.dismiss(selectedCoords);
        });
      })
      .catch(err => {
        console.log(err);
      });

  }

  onCancel () {
    this.modalCrt.dismiss();
  }

  private getGoogleMaps() :Promise<any> {
    const win= window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps){
      return Promise.resolve(googleModule.maps)

    }
    return new Promise ((resolve, reject) => {
      const script = document.createElement('script')
      script.src = ' https://maps.googleapis.com/maps/api/js?KEY=AIzaSyCPo1sss5QNT0RZ4ETk0XF2keaw0j2JdN8';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        } else {
          reject('Google maps SDK not available.');
        }
      };
    })
  }
}


