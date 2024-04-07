import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-salariost',
  templateUrl: './salariost.page.html',
  styleUrls: ['./salariost.page.scss'],
})
export class SalariostPage implements OnInit {

  doc: any;
  Salarios: { id: string; indicador: string; cantidad: string;}[];
  addSalarios: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addSalarios = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Salarios/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Salarios = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddSalarios(indicador, cantidad){
    let addSalarios = {}
    addSalarios['indicador'] = indicador
    addSalarios['cantidad'] = cantidad
    console.log(addSalarios)
    this.firestore.collection('/Estadistica-Salarios/').add(addSalarios).then(()=>{
      this.addSalarios = {indicador:'', cantidad: null } 
    })
  }

  PEA(){
    this.nav.navigateForward(['estadisticalaboral']);
  }


}
