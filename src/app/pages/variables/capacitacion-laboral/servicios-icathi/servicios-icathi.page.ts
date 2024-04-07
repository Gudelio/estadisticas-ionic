import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-servicios-icathi',
  templateUrl: './servicios-icathi.page.html',
  styleUrls: ['./servicios-icathi.page.scss'],
})
export class ServiciosIcathiPage implements OnInit {

  doc: any;
  ServiciosIcathi: { id: string; periodo: string; proyectosIncubadora: string; empresasIncubadas: string; certificadosOtorgados: string; conveniosFirmados: string; opciones: string;}[];
  addServiciosIcathi: {periodo: string; proyectosIncubadora: string; empresasIncubadas: string; cerficadosOtorgados: string, conveniosFirmados: string;  opciones: string };

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.addServiciosIcathi = {periodo:'', proyectosIncubadora: null, empresasIncubadas: null, cerficadosOtorgados: null, conveniosFirmados: null, opciones: null}    
    this.firestore.collection('/Variables - Servicios ICATHI/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.ServiciosIcathi = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            proyectosIncubadora: e.payload.doc.data()['proyectos incubadora'],
            empresasIncubadas: e.payload.doc.data()['empresas incubadas'],
            certificadosOtorgados: e.payload.doc.data()['certificados otorgados'],
            conveniosFirmados: e.payload.doc.data()['convenios firmados'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

}
