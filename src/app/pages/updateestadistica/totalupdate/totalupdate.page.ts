import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-totalupdate',
  templateUrl: './totalupdate.page.html',
  styleUrls: ['./totalupdate.page.scss'],
})
export class TotalupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateTotal(indicador, cantidad){
    let updateTotal = {}
    updateTotal['indicador'] = indicador,
    updateTotal['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-Total/'+this.id).update(updateTotal).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
