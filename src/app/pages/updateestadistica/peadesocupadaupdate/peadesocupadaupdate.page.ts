import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-peadesocupadaupdate',
  templateUrl: './peadesocupadaupdate.page.html',
  styleUrls: ['./peadesocupadaupdate.page.scss'],
})
export class PEADesocupadaupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdatePEADesocupada(indicador, cantidad){
    let updatePEADesocupada = {}
    updatePEADesocupada['indicador'] = indicador,
    updatePEADesocupada['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-PEA Desocupada/'+this.id).update(updatePEADesocupada).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
