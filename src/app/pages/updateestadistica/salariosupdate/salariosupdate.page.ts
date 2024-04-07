import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-salariosupdate',
  templateUrl: './salariosupdate.page.html',
  styleUrls: ['./salariosupdate.page.scss'],
})
export class SalariosupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateSalarios(indicador, cantidad){
    let updateSalarios = {}
    updateSalarios['indicador'] = indicador,
    updateSalarios['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-Salarios/'+this.id).update(updateSalarios).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
