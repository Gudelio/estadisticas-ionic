import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-updateestadistica',
  templateUrl: './updateestadistica.page.html',
  styleUrls: ['./updateestadistica.page.scss'],
})
export class UpdateestadisticaPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  PEA(){
    this.nav.navigateForward(['updateestadistica/peat']);
  }

  PEAOcupada(){
    this.nav.navigateForward(['updateestadistica/peaocupada']);
  }

  PEADesocupada(){
    this.nav.navigateForward(['updateestadistica/peadesocupada']);
  }

  OcupacionInformal(){
    this.nav.navigateForward(['updateestadistica/ocupacioninformal']);
  }

  TasaDesocupacion(){
    this.nav.navigateForward(['updateestadistica/tasadesocupacion']);
  }

  TasaInformalidad(){
    this.nav.navigateForward(['updateestadistica/tasa-informalidad-laboral']);
  }

  Total(){
    this.nav.navigateForward(['updateestadistica/total']);
  }

  Permanente(){
    this.nav.navigateForward(['updateestadistica/permanente']);
  }

  Eventual(){
    this.nav.navigateForward(['updateestadistica/eventual']);
  }

  Mujeres(){
    this.nav.navigateForward(['updateestadistica/mujeres']);
  }

  Hombres(){
    this.nav.navigateForward(['updateestadistica/hombres']);
  }

  Salarios(){
    this.nav.navigateForward(['updateestadistica/salarios']);
  }

  
}
