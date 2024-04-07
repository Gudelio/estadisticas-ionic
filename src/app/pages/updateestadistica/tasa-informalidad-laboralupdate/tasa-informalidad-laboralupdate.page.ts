import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tasa-informalidad-laboralupdate',
  templateUrl: './tasa-informalidad-laboralupdate.page.html',
  styleUrls: ['./tasa-informalidad-laboralupdate.page.scss'],
})
export class TasaInformalidadLaboralupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateTasaInformalidadLaboral(indicador, cantidad){
    let updateTasaInformalidadlaboral = {}
    updateTasaInformalidadlaboral['indicador'] = indicador,
    updateTasaInformalidadlaboral['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-Tasa Informalidad Laboral/'+this.id).update(updateTasaInformalidadlaboral).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
