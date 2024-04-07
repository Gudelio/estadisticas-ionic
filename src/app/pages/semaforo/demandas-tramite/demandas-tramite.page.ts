import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestimgService } from 'src/app/services/firestimg.service';
import { Semaforo } from 'src/app/models/models/models.page';

@Component({
  selector: 'app-demandas-tramite',
  templateUrl: './demandas-tramite.page.html',
  styleUrls: ['./demandas-tramite.page.scss'],
})
export class DemandasTramitePage implements OnInit {

  private path = 'Semaforo - Demandas Trámite/';

  semaforosTramite: Semaforo[] = [];


  constructor(public firestoreService: FirestimgService,
    private nav: NavController) { }

  ngOnInit() {
    this.loadSemaforosTramite();
  }

  loadSemaforosTramite() {
    this.firestoreService.getCollection<Semaforo>(this.path).subscribe( res => {
          // console.log(res);
          this.semaforosTramite = res;
    });
}

MontoLaudos(){
  this.nav.navigateForward(['semaforo/monto-laudos']);
}


}
