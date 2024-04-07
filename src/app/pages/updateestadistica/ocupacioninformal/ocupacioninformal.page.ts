import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
//Import Component for the update function and the Modal controller to handle the component.

import { OcupacioninformalupdatePage } from '../ocupacioninformalupdate/ocupacioninformalupdate.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ocupacioninformal',
  templateUrl: './ocupacioninformal.page.html',
  styleUrls: ['./ocupacioninformal.page.scss'],
})
export class OcupacioninformalPage implements OnInit {

  doc: any;
  OcupacionInformal: { id: string; indicador: string; cantidad: string;}[];
  addOcupacioninformal: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addOcupacioninformal = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Ocupacion informal/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.OcupacionInformal = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddOcupacioninformal(indicador, cantidad){
    let addOcupacioninformal = {}
    addOcupacioninformal['indicador'] = indicador
    addOcupacioninformal['cantidad'] = cantidad
    console.log(addOcupacioninformal)
    this.firestore.collection('/Estadistica-Ocupacion informal/').add(addOcupacioninformal).then(()=>{
      this.addOcupacioninformal = {indicador:'', cantidad: null } 
    })
  }

  async UpdateOcupacionInformal(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  OcupacioninformalupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeleteOcupacionInformal(id){
    this.firestore.doc('/Estadistica-Ocupacion informal/'+id).delete()
  }


}
