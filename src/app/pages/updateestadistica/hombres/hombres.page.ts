import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { HombresupdatePage } from '../hombresupdate/hombresupdate.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hombres',
  templateUrl: './hombres.page.html',
  styleUrls: ['./hombres.page.scss'],
})
export class HombresPage implements OnInit {

  doc: any;
  Hombres: { id: string; indicador: string; cantidad: string;}[];
  addHombres: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addHombres = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Hombres/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Hombres = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddHombres(indicador, cantidad){
    let addHombres = {}
    addHombres['indicador'] = indicador
    addHombres['cantidad'] = cantidad
    console.log(addHombres)
    this.firestore.collection('/Estadistica-Hombres/').add(addHombres).then(()=>{
      this.addHombres = {indicador:'', cantidad: null } 
    })
  }

  async UpdateHombres(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  HombresupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeleteHombres(id){
    this.firestore.doc('/Estadistica-Hombres/'+id).delete()
  }

}
