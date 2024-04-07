import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-procuraduria-defensa',
  templateUrl: './procuraduria-defensa.page.html',
  styleUrls: ['./procuraduria-defensa.page.scss'],
})
export class ProcuraduriaDefensaPage implements OnInit {

  doc: any;
  ProcuraduriaDefensa: { id: string; periodo: string; asesoriasQuejasRecibidas: string; conciliaciones: string; convenios: string; demandas: string; cantidadRecuperada: string; opciones: string;}[];
  addProcuraduriaDefensa: {periodo: string; asesoriasQuejasRecibidas: string; conciliaciones: string; convenios: string; demandas: string; cantidadRecuperada: string; opciones:string };

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.addProcuraduriaDefensa = {periodo:'', asesoriasQuejasRecibidas: null, conciliaciones: null, convenios: null, demandas: null, cantidadRecuperada: null, opciones: null}    
    this.firestore.collection('/Variables - Procuraduria Defensa/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.ProcuraduriaDefensa = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            asesoriasQuejasRecibidas: e.payload.doc.data()['asesorias quejas recibidas'],
            conciliaciones: e.payload.doc.data()['conciliaciones'],
            convenios: e.payload.doc.data()['convenios'],
            demandas: e.payload.doc.data()['demandas'],
            cantidadRecuperada: e.payload.doc.data()['cantidad recuperada'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

}
