import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tasa-informalidad-laboralt',
  templateUrl: './tasa-informalidad-laboralt.page.html',
  styleUrls: ['./tasa-informalidad-laboralt.page.scss'],
})
export class TasaInformalidadLaboraltPage implements OnInit {

  doc: any;
  TasaInformalidadLaboral: { id: string; indicador: string; cantidad: string;}[];
  addTasaInformalidadlaboral: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addTasaInformalidadlaboral = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Tasa Informalidad Laboral/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.TasaInformalidadLaboral = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddTasaInformalidadLaboral(indicador, cantidad){
    let addTasaInformalidadlaboral = {}
    addTasaInformalidadlaboral['indicador'] = indicador
    addTasaInformalidadlaboral['cantidad'] = cantidad
    console.log(addTasaInformalidadlaboral)
    this.firestore.collection('/Estadistica-Tasa Informalidad Laboral/').add(addTasaInformalidadlaboral).then(()=>{
      this.addTasaInformalidadlaboral = {indicador:'', cantidad: null } 
    })
  }

  Total(){
    this.nav.navigateForward(['estadisticalaboral/total']);
  }

}
