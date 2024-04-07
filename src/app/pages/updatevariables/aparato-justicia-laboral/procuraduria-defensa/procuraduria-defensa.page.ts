import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { ProcuraduriaDefensaUpdatePage } from '../procuraduria-defensa-update/procuraduria-defensa-update.page';


import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-procuraduria-defensa',
  templateUrl: './procuraduria-defensa.page.html',
  styleUrls: ['./procuraduria-defensa.page.scss'],
})
export class ProcuraduriaDefensaPage implements OnInit {

  doc: any;
  ProcuraduriaDefensa: { id: string; periodo: string; asesoriasQuejasRecibidas: string; conciliaciones: string; convenios: string; demandas: string; cantidadRecuperada: string; opciones: string;}[];
  addProcuraduriaDefensa: {periodo: string; asesoriasQuejasRecibidas: string; conciliaciones: string; convenios: string; demandas: string; cantidadRecuperada: string; opciones:string };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addProcuraduriaDefensa = {periodo:'', asesoriasQuejasRecibidas: null, conciliaciones: null, convenios: null, demandas: null, cantidadRecuperada: null, opciones: null}    
    this.firestore.collection('/Variables - Procuraduria Defensa/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.ProcuraduriaDefensa = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            asesoriasQuejasRecibidas: e.payload.doc.data()['asesorias quejas recibidas'],
            conciliaciones: e.payload.doc.data()['conciliaciones'],
            convenios: e.payload.doc.data()['convenios'],
            demandas: e.payload.doc.data()['demandas'],
            cantidadRecuperada: e.payload.doc.data()['cantidad recuperada'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

  AddProcuraduriaDefensa(periodo, asesoriasQuejasRecibidas, conciliaciones, convenios, demandas, cantidadRecuperada, opciones){
    let addProcuraduriaDefensa = {}
    addProcuraduriaDefensa['periodo'] = periodo
    addProcuraduriaDefensa['asesorias quejas recibidas'] = asesoriasQuejasRecibidas
    addProcuraduriaDefensa['conciliaciones'] = conciliaciones
    addProcuraduriaDefensa['convenios'] = convenios
    addProcuraduriaDefensa['demandas'] = demandas
    addProcuraduriaDefensa['cantidad recuperada'] = cantidadRecuperada
    addProcuraduriaDefensa['opciones'] = opciones
    console.log(addProcuraduriaDefensa)
    this.firestore.collection('/Variables - Procuraduria Defensa/').add(addProcuraduriaDefensa).then(()=>{
      this.addProcuraduriaDefensa = {periodo:'', asesoriasQuejasRecibidas: null, conciliaciones: null, convenios: null, demandas: null, cantidadRecuperada: null, opciones: null } 
    })
  }

  async UpdateProcuraduriaDefensa(id, periodo, asesoriasQuejasRecibidas, conciliaciones, convenios, demandas, cantidadRecuperada) {
    const modal = await this.modalController.create({
      component:  ProcuraduriaDefensaUpdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'periodo': periodo,
          'asesoriasQuejasRecibidas': asesoriasQuejasRecibidas,
          'conciliaciones': conciliaciones,
          'convenios': convenios,
          'demandas': demandas,
          'cantidadRecuperada': cantidadRecuperada
      }
    });
    return await modal.present();
  }

  DeleteProcuraduria(id){
    this.firestore.doc('/Variables - Procuraduria Defensa/'+id).delete()
  }

}
