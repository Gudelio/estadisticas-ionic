import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { TotalupdatePage } from '../totalupdate/totalupdate.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-total',
  templateUrl: './total.page.html',
  styleUrls: ['./total.page.scss'],
})
export class TotalPage implements OnInit {

  doc: any;
  Total: { id: string; indicador: string; cantidad: string;}[];
  addTotal: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addTotal = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Total/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Total = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  
  AddTotal(indicador, cantidad){
    let addTotal = {}
    addTotal['indicador'] = indicador
    addTotal['cantidad'] = cantidad
    console.log(addTotal)
    this.firestore.collection('/Estadistica-Total/').add(addTotal).then(()=>{
      this.addTotal = {indicador:'', cantidad: null } 
    })
  }

  async UpdateTotal(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  TotalupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeleteTotal(id){
    this.firestore.doc('/Estadistica-Total/'+id).delete()
  }

}
