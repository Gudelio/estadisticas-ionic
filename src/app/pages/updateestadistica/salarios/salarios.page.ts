import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { SalariosupdatePage } from '../salariosupdate/salariosupdate.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.page.html',
  styleUrls: ['./salarios.page.scss'],
})
export class SalariosPage implements OnInit {

  doc: any;
  Salarios: { id: string; indicador: string; cantidad: string;}[];
  addSalarios: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addSalarios = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Salarios/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Salarios = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddSalarios(indicador, cantidad){
    let addSalarios = {}
    addSalarios['indicador'] = indicador
    addSalarios['cantidad'] = cantidad
    console.log(addSalarios)
    this.firestore.collection('/Estadistica-Salarios/').add(addSalarios).then(()=>{
      this.addSalarios = {indicador:'', cantidad: null } 
    })
  }

  async UpdateSalarios(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  SalariosupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeleteSalarios(id){
    this.firestore.doc('/Estadistica-Salarios/'+id).delete()
  }

}
