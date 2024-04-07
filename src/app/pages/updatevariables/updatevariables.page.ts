import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-updatevariables',
  templateUrl: './updatevariables.page.html',
  styleUrls: ['./updatevariables.page.scss'],
})
export class UpdatevariablesPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  
CapacitacionLaboral(){
  this.nav.navigateForward(['updatevariables/capacitacionlaboral/capacitacion']);
}

ServiciosICATHI(){
  this.nav.navigateForward(['updatevariables/capacitacionlaboral/servicios-icathi']);
}

JuntaLocal(){
  this.nav.navigateForward(['updatevariables/aparato-justicia-laboral/junta-local']);
}

ProcuraduriaDefensa(){
  this.nav.navigateForward(['updatevariables/aparato-justicia-laboral/procuraduria-defensa']);
}

TribunalArbitraje(){
  this.nav.navigateForward(['updatevariables/aparato-justicia-laboral/tribunal-arbitraje']);
}

CentroConciliacion(){
  this.nav.navigateForward(['updatevariables/aparato-justicia-laboral/centro-conciliacion']);
}


VinculacionLaboral(){
  this.nav.navigateForward(['updatevariables/vinculacion-laboral/vinculacion']);
}


}
