import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tasadesocupacionupdate',
  templateUrl: './tasadesocupacionupdate.page.html',
  styleUrls: ['./tasadesocupacionupdate.page.scss'],
})
export class TasadesocupacionupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateTasaDesocupacion(indicador, cantidad){
    let updateTasaDesocupacion = {}
    updateTasaDesocupacion['indicador'] = indicador,
    updateTasaDesocupacion['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-Tasa Desocupacion/'+this.id).update(updateTasaDesocupacion).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
