import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
//Import Component for the update function and the Modal controller to handle the component.

import { PEAOcupadaupdatePage } from '../peaocupadaupdate/peaocupadaupdate.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-peaocupada',
  templateUrl: './peaocupada.page.html',
  styleUrls: ['./peaocupada.page.scss'],
})
export class PEAOcupadaPage implements OnInit {

  doc: any;
  PEAOcupada: { id: string; indicador: string; cantidad: string;}[];
  addPEAOcupada: {indicador: string; cantidad: string; };  


  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addPEAOcupada = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-PEA Ocupada/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.PEAOcupada = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddPEAOcupada(indicador, cantidad){
    let addPEAOcupada = {}
    addPEAOcupada['indicador'] = indicador
    addPEAOcupada['cantidad'] = cantidad
    console.log(addPEAOcupada)
    this.firestore.collection('/Estadistica-PEA Ocupada/').add(addPEAOcupada).then(()=>{
      this.addPEAOcupada = {indicador:'', cantidad: null } 
    })
  }

  async UpdatePEAOcupada(id, indicador, cantidad) {
    const modal = await this.modalController.create({
      component:  PEAOcupadaupdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'indicador': indicador,
          'cantidad': cantidad
      }
    });
    return await modal.present();
  }

  DeletePEAOcupada(id){
    this.firestore.doc('/Estadistica-PEA Ocupada/'+id).delete()
  }

}
