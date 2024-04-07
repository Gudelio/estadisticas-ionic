import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-peat',
  templateUrl: './peat.page.html',
  styleUrls: ['./peat.page.scss'],
})
export class PEAtPage implements OnInit {

  doc: any;
  PEA: { id: string; indicador: string; cantidad: string;}[];
  addPEA: {indicador: string; cantidad: string; }; 

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addPEA = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-PEA/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.PEA = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddPEA(indicador, cantidad){
    let addPEA = {}
    addPEA['indicador'] = indicador
    addPEA['cantidad'] = cantidad
    console.log(addPEA)
    this.firestore.collection('/Estadistica-PEA/').add(addPEA).then(()=>{
      this.addPEA = {indicador:'', cantidad: null } 
    })
  }

  PEAOcupada(){
    this.nav.navigateForward(['estadisticalaboral/peaocupada']);
  }

}
