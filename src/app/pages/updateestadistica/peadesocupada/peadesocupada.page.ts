import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
//Import Component for the update function and the Modal controller to handle the component.

import { PEADesocupadaupdatePage } from '../peadesocupadaupdate/peadesocupadaupdate.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-peadesocupada',
  templateUrl: './peadesocupada.page.html',
  styleUrls: ['./peadesocupada.page.scss'],
})
export class PEADesocupadaPage implements OnInit {

  doc: any;
  PEADesocupada: { id: string; indicador: string; cantidad: string;}[];
  addPEADesocupada: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addPEADesocupada = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-PEA Desocupada/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.PEADesocupada = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddPEADesocupada(indicador, cantidad){
    let addPEADesocupada = {}
    addPEADesocupada['indicador'] = indicador
    addPEADesocupada['cantidad'] = cantidad
    console.log(addPEADesocupada)
    this.firestore.collection('/Estadistica-PEA Desocupada/').add(addPEADesocupada).then(()=>{
      this.addPEADesocupada = {indicador:'', cantidad: null } 
    })
  }

  async UpdatePEADesocupada(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  PEADesocupadaupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeletePEADesocupada(id){
    this.firestore.doc('/Estadistica-PEA Desocupada/'+id).delete()
  }


}
