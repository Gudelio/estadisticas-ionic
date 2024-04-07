import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eventualt',
  templateUrl: './eventualt.page.html',
  styleUrls: ['./eventualt.page.scss'],
})
export class EventualtPage implements OnInit {

  doc: any;
  Eventual: { id: string; indicador: string; cantidad: string;}[];
  addEventual: {indicador: string; cantidad: string; };


  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addEventual = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica - Eventual/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Eventual = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddEventual(indicador, cantidad){
    let addEventual = {}
    addEventual['indicador'] = indicador
    addEventual['cantidad'] = cantidad
    console.log(addEventual)
    this.firestore.collection('/Estadistica - Eventual/').add(addEventual).then(()=>{
      this.addEventual = {indicador:'', cantidad: null } 
    })
  }

  Mujeres(){
    this.nav.navigateForward(['estadisticalaboral/mujeres']);
  }

}
