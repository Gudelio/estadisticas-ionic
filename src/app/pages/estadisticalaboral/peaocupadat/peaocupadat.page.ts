import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-peaocupadat',
  templateUrl: './peaocupadat.page.html',
  styleUrls: ['./peaocupadat.page.scss'],
})
export class PEAOcupadatPage implements OnInit {

  doc: any;
  PEAOcupada: { id: string; indicador: string; cantidad: string;}[];
  addPEAOcupada: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addPEAOcupada = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-PEA Ocupada/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.PEAOcupada = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddPEAOcupada(indicador, cantidad){
    let addPEAOcupada = {}
    addPEAOcupada['indicador'] = indicador
    addPEAOcupada['cantidad'] = cantidad
    console.log(addPEAOcupada)
    this.firestore.collection('/Estadistica-PEA Ocupada/').add(addPEAOcupada).then(()=>{
      this.addPEAOcupada = {indicador:'', cantidad: null } 
    })
  }

  PEADesocupada(){
    this.nav.navigateForward(['estadisticalaboral/peadesocupada']);
  }

}
