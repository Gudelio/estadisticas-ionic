import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { JuntaLocalUpdatePage } from '../junta-local-update/junta-local-update.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-junta-local',
  templateUrl: './junta-local.page.html',
  styleUrls: ['./junta-local.page.scss'],
})
export class JuntaLocalPage implements OnInit {

  doc: any;
  JuntaLocal: { id: string; periodo: string; laudos: string; conveniosJuicio: string; cantidadPagadaConvenios: string; opciones: string;}[];
  addJuntaLocal: {periodo: string; laudos: string; conveniosJuicio: string; cantidadPagadaConvenios: string; opciones:string };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addJuntaLocal = {periodo:'', laudos: null, conveniosJuicio: null, cantidadPagadaConvenios: null, opciones: null}    
    this.firestore.collection('/Variables - Junta Local/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.JuntaLocal = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            laudos: e.payload.doc.data()['laudos'],
            conveniosJuicio: e.payload.doc.data()['convenios juicio'],
            cantidadPagadaConvenios: e.payload.doc.data()['cantidad pagada convenios'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

  AddJuntaLocal(periodo, laudos, conveniosJuicio, cantidadPagadaConvenios, opciones){
    let addJuntaLocal = {}
    addJuntaLocal['periodo'] = periodo
    addJuntaLocal['laudos'] = laudos
    addJuntaLocal['convenios juicio'] = conveniosJuicio
    addJuntaLocal['cantidad pagada convenios'] = cantidadPagadaConvenios
    addJuntaLocal['opciones'] = opciones
    console.log(addJuntaLocal)
    this.firestore.collection('/Variables - Junta Local/').add(addJuntaLocal).then(()=>{
      this.addJuntaLocal = {periodo:'', laudos: null, conveniosJuicio: null, cantidadPagadaConvenios: null, opciones: null } 
    })
  }

  async UpdateJuntaLocal(id, periodo, laudos, conveniosJuicio, cantidadPagadaConvenios) {
    const modal = await this.modalController.create({
      component:  JuntaLocalUpdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'periodo': periodo,
          'laudos': laudos,
          'conveniosJuicio': conveniosJuicio,
          'cantidadPagadaConvenios': cantidadPagadaConvenios
      }
    });
    return await modal.present();
  }

  DeleteJuntaLocal(id){
    this.firestore.doc('/Variables - Junta Local/'+id).delete()
  }


}
