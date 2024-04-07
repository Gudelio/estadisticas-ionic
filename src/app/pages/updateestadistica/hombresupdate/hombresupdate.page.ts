import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hombresupdate',
  templateUrl: './hombresupdate.page.html',
  styleUrls: ['./hombresupdate.page.scss'],
})
export class HombresupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateHombres(indicador, cantidad){
    let updateHombres = {}
    updateHombres['indicador'] = indicador,
    updateHombres['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-Hombres/'+this.id).update(updateHombres).then(()=>{
      this.modalController.dismiss()
    })
  }

  CloseModal(){
    this.modalController.dismiss()
  }

}
