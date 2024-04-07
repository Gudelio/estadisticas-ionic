import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
//Import Component for the update function and the Modal controller to handle the component.

import { TasadesocupacionupdatePage } from '../tasadesocupacionupdate/tasadesocupacionupdate.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tasadesocupacion',
  templateUrl: './tasadesocupacion.page.html',
  styleUrls: ['./tasadesocupacion.page.scss'],
})
export class TasadesocupacionPage implements OnInit {

  doc: any;
  TasaDesocupacion: { id: string; indicador: string; cantidad: string;}[];
  addTasadesocupacion: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addTasadesocupacion = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Tasa Desocupacion/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.TasaDesocupacion = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddTasaDesocupacion(indicador, cantidad){
    let addTasadesocupacion = {}
    addTasadesocupacion['indicador'] = indicador
    addTasadesocupacion['cantidad'] = cantidad
    console.log(addTasadesocupacion)
    this.firestore.collection('/Estadistica-Tasa Desocupacion/').add(addTasadesocupacion).then(()=>{
      this.addTasadesocupacion = {indicador:'', cantidad: null } 
    })
  }

  async UpdateTasaDesocupacion(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  TasadesocupacionupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeleteTasaDesocupacion(id){
    this.firestore.doc('/Estadistica-Tasa Desocupacion/'+id).delete()
  }

}
