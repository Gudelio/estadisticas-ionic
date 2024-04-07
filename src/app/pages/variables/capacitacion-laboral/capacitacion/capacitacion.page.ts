import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.page.html',
  styleUrls: ['./capacitacion.page.scss'],
})
export class CapacitacionPage implements OnInit {

  doc: any;
  CapacitacionLaboral: { id: string; periodo: string; cursosimpartidos: string; alumnoscapacitados: string; opciones: string;}[];
  addCapacitacionLaboral: {periodo: string; cursosimpartidos: string; alumnoscapacitados: string; opciones:string };

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.addCapacitacionLaboral = {periodo:'', cursosimpartidos: null, alumnoscapacitados: null, opciones: null}    
    this.firestore.collection('/Variables - Capacitacion Laboral/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.CapacitacionLaboral = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            cursosimpartidos: e.payload.doc.data()['cursos impartidos'],
            alumnoscapacitados: e.payload.doc.data()['alumnos capacitados'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }


}
