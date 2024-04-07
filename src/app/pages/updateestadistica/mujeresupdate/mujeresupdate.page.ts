import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mujeresupdate',
  templateUrl: './mujeresupdate.page.html',
  styleUrls: ['./mujeresupdate.page.scss'],
})
export class MujeresupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateMujeres(indicador, cantidad){
    let updateMujeres = {}
    updateMujeres['indicador'] = indicador,
    updateMujeres['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-Mujeres/'+this.id).update(updateMujeres).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
