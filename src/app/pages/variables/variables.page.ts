import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.page.html',
  styleUrls: ['./variables.page.scss'],
})
export class VariablesPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  CapacitacionLaboral(){
    this.nav.navigateForward(['variables/capacitacion-laboral/capacitacion']);
  }
  
  ServiciosICATHI(){
    this.nav.navigateForward(['variables/capacitacion-laboral/servicios-icathi']);
  }
  
  JuntaLocal(){
    this.nav.navigateForward(['variables/aparato-justicia-laboral/junta-local']);
  }
  
  ProcuraduriaDefensa(){
    this.nav.navigateForward(['variables/aparato-justicia-laboral/procuraduria-defensa']);
  }
  
  TribunalArbitraje(){
    this.nav.navigateForward(['variables/aparato-justicia-laboral/tribunal-arbitraje']);
  }
  
  CentroConciliacion(){
    this.nav.navigateForward(['variables/aparato-justicia-laboral/centro-conciliacion']);
  }
  
  
  VinculacionLaboral(){
    this.nav.navigateForward(['variables/vinculacion-laboral/vinculacion']);
  }

}
