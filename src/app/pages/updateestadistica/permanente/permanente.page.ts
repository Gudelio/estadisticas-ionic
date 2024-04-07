import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { PermanenteupdatePage } from '../permanenteupdate/permanenteupdate.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-permanente',
  templateUrl: './permanente.page.html',
  styleUrls: ['./permanente.page.scss'],
})
export class PermanentePage implements OnInit {

  doc: any;
  Permanente: { id: string; indicador: string; cantidad: string;}[];
  addPermanente: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addPermanente = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Permanente/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Permanente = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddPermanente(indicador, cantidad){
    let addPermanente = {}
    addPermanente['indicador'] = indicador
    addPermanente['cantidad'] = cantidad
    console.log(addPermanente)
    this.firestore.collection('/Estadistica-Permanente/').add(addPermanente).then(()=>{
      this.addPermanente = {indicador:'', cantidad: null } 
    })
  }

  async UpdatePermanente(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  PermanenteupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeletePermanente(id){
    this.firestore.doc('/Estadistica-Permanente/'+id).delete()
  }

}




