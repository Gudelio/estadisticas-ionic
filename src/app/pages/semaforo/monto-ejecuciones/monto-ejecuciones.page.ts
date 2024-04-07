import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestimgService } from 'src/app/services/firestimg.service';
import { Semaforo } from 'src/app/models/models/models.page';

@Component({
  selector: 'app-monto-ejecuciones',
  templateUrl: './monto-ejecuciones.page.html',
  styleUrls: ['./monto-ejecuciones.page.scss'],
})
export class MontoEjecucionesPage implements OnInit {

  private path = 'Semaforo - Monto Ejecuciones/';

  semaforosEjecuciones: Semaforo[] = [];


  constructor(public firestoreService: FirestimgService,
    private nav: NavController) { }

  ngOnInit() {
    this.loadSemaforosEjecuciones();
  }

  loadSemaforosEjecuciones() {
    this.firestoreService.getCollection<Semaforo>(this.path).subscribe( res => {
          // console.log(res);
          this.semaforosEjecuciones = res;
    });
}

  SemaforoGlobal(){
    this.nav.navigateForward(['semaforo']);
  }

}
