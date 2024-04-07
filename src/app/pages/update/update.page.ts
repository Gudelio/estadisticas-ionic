import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  updestadistica(){
    this.nav.navigateForward(['updateestadistica']);
  }

  updvariables(){
    this.nav.navigateForward(['updatevariables']);
  }

  updsemaforo(){
    this.nav.navigateForward(['updatesemaforo']);
  }



}
