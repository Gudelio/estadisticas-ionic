import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-vinculacion',
  templateUrl: './vinculacion.page.html',
  styleUrls: ['./vinculacion.page.scss'],
})
export class VinculacionPage implements OnInit {

  doc: any;
  VinculacionLaboral: { id: string; periodo: string; personasAtendidas: string; personasColocadas: string; plazasOfrecidas: string; opciones: string;}[];
  addVinculacionLaboral: {periodo: string; personasAtendidas: string; personasColocadas: string; plazasOfrecidas: string; opciones:string };

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.addVinculacionLaboral = {periodo:'', personasAtendidas: null, personasColocadas: null, plazasOfrecidas: null, opciones: null}    
    this.firestore.collection('/Variables - Vinculacion Laboral/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.VinculacionLaboral = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            personasAtendidas: e.payload.doc.data()['personas atendidas'],
            personasColocadas: e.payload.doc.data()['personas colocadas'],
            plazasOfrecidas: e.payload.doc.data()['plazas ofrecidas'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

}
