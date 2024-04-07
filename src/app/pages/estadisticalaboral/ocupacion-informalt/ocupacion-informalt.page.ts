import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ocupacion-informalt',
  templateUrl: './ocupacion-informalt.page.html',
  styleUrls: ['./ocupacion-informalt.page.scss'],
})
export class OcupacionInformaltPage implements OnInit {

  doc: any;
  OcupacionInformal: { id: string; indicador: string; cantidad: string;}[];
  addOcupacioninformal: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addOcupacioninformal = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Ocupacion informal/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.OcupacionInformal = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddOcupacioninformal(indicador, cantidad){
    let addOcupacioninformal = {}
    addOcupacioninformal['indicador'] = indicador
    addOcupacioninformal['cantidad'] = cantidad
    console.log(addOcupacioninformal)
    this.firestore.collection('/Estadistica-Ocupacion informal/').add(addOcupacioninformal).then(()=>{
      this.addOcupacioninformal = {indicador:'', cantidad: null } 
    })
  }

  TasaDesocupacion(){
    this.nav.navigateForward(['estadisticalaboral/tasa-desocupacion']);
  }

}
