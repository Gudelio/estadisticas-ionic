import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mujerest',
  templateUrl: './mujerest.page.html',
  styleUrls: ['./mujerest.page.scss'],
})
export class MujerestPage implements OnInit {

  doc: any;
  Mujeres: { id: string; indicador: string; cantidad: string;}[];
  addMujeres: {indicador: string; cantidad: string; };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addMujeres = {indicador:'', cantidad: null}    
    this.firestore.collection('/Estadistica-Mujeres/', ref => ref.orderBy('indicador', 'asc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.Mujeres = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            indicador: e.payload.doc.data()['indicador'],
            cantidad: e.payload.doc.data()['cantidad']
          }
        })   
      }  
    })
  }

  AddMujeres(indicador, cantidad){
    let addMujeres = {}
    addMujeres['indicador'] = indicador
    addMujeres['cantidad'] = cantidad
    console.log(addMujeres)
    this.firestore.collection('/Estadistica-Mujeres/').add(addMujeres).then(()=>{
      this.addMujeres = {indicador:'', cantidad: null } 
    })
  }

  Hombres(){
    this.nav.navigateForward(['estadisticalaboral/hombres']);
  }

}
