import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detailplace',
  templateUrl: './detailplace.page.html',
  styleUrls: ['./detailplace.page.scss'],
})
export class DetailplacePage implements OnInit {

  constructor(private router:Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover')
    this.navCtrl.navigateBack('/places/tabs/discover')

  }

}
