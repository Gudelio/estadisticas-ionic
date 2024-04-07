import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestimgService } from 'src/app/services/firestimg.service';
import { Semaforo } from 'src/app/models/models/models.page';


@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.page.html',
  styleUrls: ['./semaforo.page.scss'],
})
export class SemaforoPage implements OnInit {

  private path = 'Semaforo - Semaforo Global/';

  semaforos: Semaforo[] = [];


  constructor(
    public firestoreService: FirestimgService,
    private nav:NavController
    ) { }

  ngOnInit() {
    this.loadSemaforos();
  }

  loadSemaforos() {
    this.firestoreService.getCollection<Semaforo>(this.path).subscribe( res => {
          // console.log(res);
          this.semaforos = res;
    });
  }


DemandasTramite(){
  this.nav.navigateForward(['semaforo/demandas-tramite']);
}

}
