import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tasa-desocupaciont',
  templateUrl: './tasa-desocupaciont.page.html',
  styleUrls: ['./tasa-desocupaciont.page.scss'],
})
export class TasaDesocupaciontPage implements OnInit {

  doc: any;
  TasaDesocupacion: { id: string; indicador: string; cantidad: string;}[];
  addTasadesocupacion: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addTasadesocupacion = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Tasa Desocupacion/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.TasaDesocupacion = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddTasaDesocupacion(indicador, cantidad){
    let addTasadesocupacion = {}
    addTasadesocupacion['indicador'] = indicador
    addTasadesocupacion['cantidad'] = cantidad
    console.log(addTasadesocupacion)
    this.firestore.collection('/Estadistica-Tasa Desocupacion/').add(addTasadesocupacion).then(()=>{
      this.addTasadesocupacion = {indicador:'', cantidad: null } 
    })
  }

  TasaInformalidadLaboral(){
    this.nav.navigateForward(['estadisticalaboral/tasa-informalidad-laboral']);
  }

}
