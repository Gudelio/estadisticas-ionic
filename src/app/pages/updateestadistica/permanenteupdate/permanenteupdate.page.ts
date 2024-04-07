import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-permanenteupdate',
  templateUrl: './permanenteupdate.page.html',
  styleUrls: ['./permanenteupdate.page.scss'],
})
export class PermanenteupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdatePermanente(indicador, cantidad){
    let updatePermanente = {}
    updatePermanente['indicador'] = indicador,
    updatePermanente['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-Permanente/'+this.id).update(updatePermanente).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
