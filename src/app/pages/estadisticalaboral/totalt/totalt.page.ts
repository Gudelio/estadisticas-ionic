import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-totalt',
  templateUrl: './totalt.page.html',
  styleUrls: ['./totalt.page.scss'],
})
export class TotaltPage implements OnInit {

  doc: any;
  Total: { id: string; indicador: string; cantidad: string;}[];
  addTotal: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addTotal = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Total/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Total = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddTotal(indicador, cantidad){
    let addTotal = {}
    addTotal['indicador'] = indicador
    addTotal['cantidad'] = cantidad
    console.log(addTotal)
    this.firestore.collection('/Estadistica-Total/').add(addTotal).then(()=>{
      this.addTotal = {indicador:'', cantidad: null } 
    })
  }

  Permanente(){
    this.nav.navigateForward(['estadisticalaboral/permanente']);
  }

}
