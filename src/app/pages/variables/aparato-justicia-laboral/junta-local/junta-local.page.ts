import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-junta-local',
  templateUrl: './junta-local.page.html',
  styleUrls: ['./junta-local.page.scss'],
})
export class JuntaLocalPage implements OnInit {

  doc: any;
  JuntaLocal: { id: string; periodo: string; laudos: string; conveniosJuicio: string; cantidadPagadaConvenios: string; opciones: string;}[];
  addJuntaLocal: {periodo: string; laudos: string; conveniosJuicio: string; cantidadPagadaConvenios: string; opciones:string };

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.addJuntaLocal = {periodo:'', laudos: null, conveniosJuicio: null, cantidadPagadaConvenios: null, opciones: null}    
    this.firestore.collection('/Variables - Junta Local/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.JuntaLocal = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            laudos: e.payload.doc.data()['laudos'],
            conveniosJuicio: e.payload.doc.data()['convenios juicio'],
            cantidadPagadaConvenios: e.payload.doc.data()['cantidad pagada convenios'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

}
