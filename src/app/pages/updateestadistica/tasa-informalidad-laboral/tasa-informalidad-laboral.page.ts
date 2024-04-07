import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
//Import Component for the update function and the Modal controller to handle the component.

import { TasaInformalidadLaboralupdatePage } from '../tasa-informalidad-laboralupdate/tasa-informalidad-laboralupdate.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tasa-informalidad-laboral',
  templateUrl: './tasa-informalidad-laboral.page.html',
  styleUrls: ['./tasa-informalidad-laboral.page.scss'],
})
export class TasaInformalidadLaboralPage implements OnInit {

  doc: any;
  TasaInformalidadLaboral: { id: string; indicador: string; cantidad: string;}[];
  addTasaInformalidadlaboral: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addTasaInformalidadlaboral = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Tasa Informalidad Laboral/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.TasaInformalidadLaboral = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddTasaInformalidadLaboral(indicador, cantidad){
    let addTasaInformalidadlaboral = {}
    addTasaInformalidadlaboral['indicador'] = indicador
    addTasaInformalidadlaboral['cantidad'] = cantidad
    console.log(addTasaInformalidadlaboral)
    this.firestore.collection('/Estadistica-Tasa Informalidad Laboral/').add(addTasaInformalidadlaboral).then(()=>{
      this.addTasaInformalidadlaboral = {indicador:'', cantidad: null } 
    })
  }

  async UpdateTasaInformalidadLaboral(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  TasaInformalidadLaboralupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeleteTasaInformalidadLaboral(id){
    this.firestore.doc('/Estadistica-Tasa Informalidad Laboral/'+id).delete()
  }

}
