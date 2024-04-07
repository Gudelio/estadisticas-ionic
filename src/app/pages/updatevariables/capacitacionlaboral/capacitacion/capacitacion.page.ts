import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { CapacitacionUpdatePage } from '../capacitacion-update/capacitacion-update.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { from } from 'rxjs';



@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.page.html',
  styleUrls: ['./capacitacion.page.scss'],
})
export class CapacitacionPage implements OnInit {

  doc: any;
  CapacitacionLaboral: { id: string; periodo: string; cursosimpartidos: string; alumnoscapacitados: string; opciones: string;}[];
  addCapacitacionLaboral: {periodo: string; cursosimpartidos: string; alumnoscapacitados: string; opciones:string };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addCapacitacionLaboral = {periodo:'', cursosimpartidos: null, alumnoscapacitados: null, opciones: null}    
    this.firestore.collection('/Variables - Capacitacion Laboral/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.CapacitacionLaboral = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            cursosimpartidos: e.payload.doc.data()['cursos impartidos'],
            alumnoscapacitados: e.payload.doc.data()['alumnos capacitados'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

  AddCapacitacionLaboral(periodo, cursosimpartidos, alumnoscapacitados, opciones){
    let addCapacitacionLaboral = {}
    addCapacitacionLaboral['periodo'] = periodo
    addCapacitacionLaboral['cursos impartidos'] = cursosimpartidos
    addCapacitacionLaboral['alumnos capacitados'] = alumnoscapacitados
    addCapacitacionLaboral['opciones'] = opciones
    console.log(addCapacitacionLaboral)
    this.firestore.collection('/Variables - Capacitacion Laboral/').add(addCapacitacionLaboral).then(()=>{
      this.addCapacitacionLaboral = {periodo:'', cursosimpartidos: null, alumnoscapacitados: null, opciones: null } 
    })
  }

  async UpdateCapacitacionLaboral(id, periodo, cursosimpartidos, alumnoscapacitados) {
    const modal = await this.modalController.create({
      component:  CapacitacionUpdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'periodo': periodo,
          'cursosimpartidos': cursosimpartidos,
          'alumnoscapacitados': alumnoscapacitados
      }
    });
    return await modal.present();
  }

  DeleteCapacitacionLaboral(id){
    this.firestore.doc('/Variables - Capacitacion Laboral/'+id).delete()
  }

}
