import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-junta-local-update',
  templateUrl: './junta-local-update.page.html',
  styleUrls: ['./junta-local-update.page.scss'],
})
export class JuntaLocalUpdatePage implements OnInit {

  @Input() id: string;  
  @Input() periodo: string; 
  @Input() laudos: string;
  @Input() conveniosJuicio: string;
  @Input() cantidadPagadaConvenios: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateJuntaLocal(periodo, laudos, conveniosJuicio, cantidadPagadaConvenios){
    let updateJuntaLocal = {}
    updateJuntaLocal['periodo'] = periodo,
    updateJuntaLocal['laudos'] = laudos,
    updateJuntaLocal['convenios juicio'] = conveniosJuicio,
    updateJuntaLocal['cantidad pagada convenios'] = cantidadPagadaConvenios,
    this.firestore.doc('/Variables - Junta Local/'+this.id).update(updateJuntaLocal).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
