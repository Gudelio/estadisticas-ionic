import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { VinculacionUpdatePage } from '../vinculacion-update/vinculacion-update.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-vinculacion',
  templateUrl: './vinculacion.page.html',
  styleUrls: ['./vinculacion.page.scss'],
})
export class VinculacionPage implements OnInit {

  doc: any;
  VinculacionLaboral: { id: string; periodo: string; personasAtendidas: string; personasColocadas: string; plazasOfrecidas: string; opciones: string;}[];
  addVinculacionLaboral: {periodo: string; personasAtendidas: string; personasColocadas: string; plazasOfrecidas: string; opciones:string };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addVinculacionLaboral = {periodo:'', personasAtendidas: null, personasColocadas: null, plazasOfrecidas: null, opciones: null}    
    this.firestore.collection('/Variables - Vinculacion Laboral/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.VinculacionLaboral = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            personasAtendidas: e.payload.doc.data()['personas atendidas'],
            personasColocadas: e.payload.doc.data()['personas colocadas'],
            plazasOfrecidas: e.payload.doc.data()['plazas ofrecidas'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

  AddVinculacionLaboral(periodo, personasAtendidas, personasColocadas, plazasOfrecidas, opciones){
    let addVinculacionLaboral = {}
    addVinculacionLaboral['periodo'] = periodo
    addVinculacionLaboral['personas atendidas'] = personasAtendidas
    addVinculacionLaboral['personas colocadas'] = personasColocadas
    addVinculacionLaboral['plazas ofrecidas'] = plazasOfrecidas
    addVinculacionLaboral['opciones'] = opciones
    console.log(addVinculacionLaboral)
    this.firestore.collection('/Variables - Vinculacion Laboral/').add(addVinculacionLaboral).then(()=>{
      this.addVinculacionLaboral = {periodo:'', personasAtendidas: null, personasColocadas: null, plazasOfrecidas: null, opciones: null } 
    })
  }

  async UpdateVinculacionLaboral(id, periodo, personasAtendidas, personasColocadas, plazasOfrecidas) {
    const modal = await this.modalController.create({
      component:  VinculacionUpdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'periodo': periodo,
          'personasAtendidas': personasAtendidas,
          'personasColocadas': personasColocadas,
          'plazasOfrecidas': plazasOfrecidas
      }
    });
    return await modal.present();
  }

  DeleteVinculacionLaboral(id){
    this.firestore.doc('/Variables - Vinculacion Laboral/'+id).delete()
  }

}
