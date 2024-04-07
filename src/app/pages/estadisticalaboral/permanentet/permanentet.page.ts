import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-permanentet',
  templateUrl: './permanentet.page.html',
  styleUrls: ['./permanentet.page.scss'],
})
export class PermanentetPage implements OnInit {

  doc: any;
  Permanente: { id: string; indicador: string; cantidad: string;}[];
  addPermanente: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addPermanente = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Permanente/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Permanente = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddPermanente(indicador, cantidad){
    let addPermanente = {}
    addPermanente['indicador'] = indicador
    addPermanente['cantidad'] = cantidad
    console.log(addPermanente)
    this.firestore.collection('/Estadistica-Total/').add(addPermanente).then(()=>{
      this.addPermanente = {indicador:'', cantidad: null } 
    })
  }

  Eventual(){
    this.nav.navigateForward(['estadisticalaboral/eventual']);
  }

}
