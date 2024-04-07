import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { EventualupdatePage } from '../eventualupdate/eventualupdate.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eventual',
  templateUrl: './eventual.page.html',
  styleUrls: ['./eventual.page.scss'],
})
export class EventualPage implements OnInit {

  doc: any;
  Eventual: { id: string; indicador: string; cantidad: string;}[];
  addEventual: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addEventual = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica - Eventual/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Eventual = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddEventual(indicador, cantidad){
    let addEventual = {}
    addEventual['indicador'] = indicador
    addEventual['cantidad'] = cantidad
    console.log(addEventual)
    this.firestore.collection('/Estadistica - Eventual/').add(addEventual).then(()=>{
      this.addEventual = {indicador:'', cantidad: null } 
    })
  }

  async UpdateEventual(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  EventualupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeleteEventual(id){
    this.firestore.doc('/Estadistica - Eventual/'+id).delete()
  }

}
