import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hombrest',
  templateUrl: './hombrest.page.html',
  styleUrls: ['./hombrest.page.scss'],
})
export class HombrestPage implements OnInit {

  doc: any;
  Hombres: { id: string; indicador: string; cantidad: string;}[];
  addHombres: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addHombres = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Hombres/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Hombres = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddHombres(indicador, cantidad){
    let addHombres = {}
    addHombres['indicador'] = indicador
    addHombres['cantidad'] = cantidad
    console.log(addHombres)
    this.firestore.collection('/Estadistica-Hombres/').add(addHombres).then(()=>{
      this.addHombres = {indicador:'', cantidad: null } 
    })
  }

  Salarios(){
    this.nav.navigateForward(['estadisticalaboral/salarios']);
  }

}
