import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-peadesocupadat',
  templateUrl: './peadesocupadat.page.html',
  styleUrls: ['./peadesocupadat.page.scss'],
})
export class PEADesocupadatPage implements OnInit {

  doc: any;
  PEADesocupada: { id: string; indicador: string; cantidad: string;}[];
  addPEADesocupada: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addPEADesocupada = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-PEA Desocupada/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.PEADesocupada = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddPEADesocupada(indicador, cantidad){
    let addPEADesocupada = {}
    addPEADesocupada['indicador'] = indicador
    addPEADesocupada['cantidad'] = cantidad
    console.log(addPEADesocupada)
    this.firestore.collection('/Estadistica-PEA Desocupada/').add(addPEADesocupada).then(()=>{
      this.addPEADesocupada = {indicador:'', cantidad: null } 
    })
  }

  OcupacionInformal(){
    this.nav.navigateForward(['estadisticalaboral/ocupacion-informal']);
  }

}
