import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-eventualupdate',
  templateUrl: './eventualupdate.page.html',
  styleUrls: ['./eventualupdate.page.scss'],
})
export class EventualupdatePage implements OnInit {

  @Input() id: string;  
  @Input() indicador: string; 
  @Input() cantidad: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateEventual(indicador, cantidad){
    let updateEventual = {}
    updateEventual['indicador'] = indicador,
    updateEventual['cantidad'] = cantidad,
    this.firestore.doc('/Estadistica-Eventual/'+this.id).update(updateEventual).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
