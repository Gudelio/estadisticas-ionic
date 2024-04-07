import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-peaupdate',
  templateUrl: './peaupdate.page.html',
  styleUrls: ['./peaupdate.page.scss'],
})
export class PEAupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdatePEA(indicador, cantidad){
    let updatePEA = {}
    updatePEA['indicador'] = indicador,
    updatePEA['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-PEA/'+this.id).update(updatePEA).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
