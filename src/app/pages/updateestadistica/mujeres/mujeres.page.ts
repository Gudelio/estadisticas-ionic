import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { MujeresupdatePage } from '../mujeresupdate/mujeresupdate.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mujeres',
  templateUrl: './mujeres.page.html',
  styleUrls: ['./mujeres.page.scss'],
})
export class MujeresPage implements OnInit {

  doc: any;
  Mujeres: { id: string; indicador: string; cantidad: string;}[];
  addMujeres: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addMujeres = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Mujeres/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Mujeres = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddMujeres(indicador, cantidad){
    let addMujeres = {}
    addMujeres['indicador'] = indicador
    addMujeres['cantidad'] = cantidad
    console.log(addMujeres)
    this.firestore.collection('/Estadistica-Mujeres/').add(addMujeres).then(()=>{
      this.addMujeres = {indicador:'', cantidad: null } 
    })
  }

  async UpdateMujeres(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  MujeresupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeleteMujeres(id){
    this.firestore.doc('/Estadistica-Mujeres/'+id).delete()
  }


}
