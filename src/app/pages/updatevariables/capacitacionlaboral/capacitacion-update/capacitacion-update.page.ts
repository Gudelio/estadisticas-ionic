import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-capacitacion-update',
  templateUrl: './capacitacion-update.page.html',
  styleUrls: ['./capacitacion-update.page.scss'],
})
export class CapacitacionUpdatePage implements OnInit {

  @Input() id: string;  
  @Input() periodo: string; 
  @Input() cursosimpartidos: string;
  @Input() alumnoscapacitados: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateCapacitacionLaboral(periodo, cursosimpartidos, alumnoscapacitados){
    let updateCapacitacionLaboral = {}
    updateCapacitacionLaboral['periodo'] = periodo,
    updateCapacitacionLaboral['cursos impartidos'] = cursosimpartidos,
    updateCapacitacionLaboral['alumnos capacitados'] = alumnoscapacitados,
    this.firestore.doc('/Variables - Capacitacion Laboral/'+this.id).update(updateCapacitacionLaboral).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }


}
