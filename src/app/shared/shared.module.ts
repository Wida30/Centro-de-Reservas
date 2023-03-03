import { IonicModule } from '@ionic/angular';
import { NgModule } from "@angular/core";
import { PickLocationComponent } from './pick/pick-location/pick-location.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PickLocationComponent, MapModalComponent],
  imports:[CommonModule, IonicModule],
  exports: [PickLocationComponent, MapModalComponent],
  entryComponents: [MapModalComponent]
})
export class SharedModule {}
