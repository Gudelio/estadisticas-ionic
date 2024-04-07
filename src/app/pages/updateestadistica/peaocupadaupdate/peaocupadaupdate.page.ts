import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-peaocupadaupdate',
  templateUrl: './peaocupadaupdate.page.html',
  styleUrls: ['./peaocupadaupdate.page.scss'],
})
export class PEAOcupadaupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  
  UpdatePEAOcupada(indicador, cantidad){
    let updatePEAOcupada = {}
    updatePEAOcupada['indicador'] = indicador,
    updatePEAOcupada['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-PEA Ocupada/'+this.id).update(updatePEAOcupada).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
