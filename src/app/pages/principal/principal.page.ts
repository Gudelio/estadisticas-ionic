import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  gotoLoginpage(){
    this.nav.navigateForward(['login']);
  }

  registerUser(){
    this.nav.navigateForward(['registro']);
  }
  
}
