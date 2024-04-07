import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ocupacioninformalupdate',
  templateUrl: './ocupacioninformalupdate.page.html',
  styleUrls: ['./ocupacioninformalupdate.page.scss'],
})
export class OcupacioninformalupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateOcupacionInformal(indicador, cantidad){
    let updateOcupacionInformal = {}
    updateOcupacionInformal['indicador'] = indicador,
    updateOcupacionInformal['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-Ocupacion informal/'+this.id).update(updateOcupacionInformal).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
