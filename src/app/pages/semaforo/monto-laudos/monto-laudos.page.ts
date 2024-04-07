import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestimgService } from 'src/app/services/firestimg.service';
import { Semaforo } from 'src/app/models/models/models.page';

@Component({
  selector: 'app-monto-laudos',
  templateUrl: './monto-laudos.page.html',
  styleUrls: ['./monto-laudos.page.scss'],
})
export class MontoLaudosPage implements OnInit {

  private path = 'Semaforo - Monto Laudos/';

  semaforosLaudos: Semaforo[] = [];


  constructor(public firestoreService: FirestimgService,
    private nav: NavController) { }

  ngOnInit() {
    this.loadSemaforosLaudos();
  }

  loadSemaforosLaudos() {
    this.firestoreService.getCollection<Semaforo>(this.path).subscribe( res => {
          // console.log(res);
          this.semaforosLaudos = res;
    });
}

MontoEjecuciones(){
  this.nav.navigateForward(['semaforo/monto-ejecuciones']);
}

}
