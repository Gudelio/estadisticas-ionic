import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-centro-conciliacion',
  templateUrl: './centro-conciliacion.page.html',
  styleUrls: ['./centro-conciliacion.page.scss'],
})
export class CentroConciliacionPage implements OnInit {

  doc: any;
  CentroConciliacion: { id: string; periodo: string; orientaciones: string; gruposVulnerables: string; asesorias: string; solicitudesConfirmadas: string; audienciasDesahogadas: string; conveniosRealizados: string; montoConvenido: string; constaciasnoConciliacion: string; archivados: string, trabajadoresAtendidos: string; audienciasMas: string; expedientesTramite: string; opciones: string;}[];
  addCentroConciliacion: {periodo: string; orientaciones: string; gruposVulnerables: string; asesorias: string; solicitudesConfirmadas: string; audienciasDesahogadas: string; conveniosRealizados: string; montoConvenido: string; constaciasnoConciliacion: string; archivados: string, trabajadoresAtendidos: string; audienciasMas: string; expedientesTramite: string; opciones:string };

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.addCentroConciliacion = {periodo:'', orientaciones: null, gruposVulnerables: null, asesorias: null, solicitudesConfirmadas: null, audienciasDesahogadas: null, conveniosRealizados: null, montoConvenido: null, constaciasnoConciliacion: null, archivados: null, trabajadoresAtendidos: null, audienciasMas: null, expedientesTramite: null, opciones: null}    
    this.firestore.collection('/Variables - Centro de Conciliacion/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.CentroConciliacion = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            orientaciones: e.payload.doc.data()['orientaciones modulo'],
            gruposVulnerables: e.payload.doc.data()['grupos vulnerables'],
            asesorias: e.payload.doc.data()['asesorias'],
            solicitudesConfirmadas: e.payload.doc.data()['solicitudes confirmadas'],
            audienciasDesahogadas: e.payload.doc.data()['audiencias desahogadas'],
            conveniosRealizados: e.payload.doc.data()['convenios realizados'],
            montoConvenido: e.payload.doc.data()['monto convenido'],
            constaciasnoConciliacion: e.payload.doc.data()['constancias no conciliacion'],
            archivados: e.payload.doc.data()['archivados'],
            trabajadoresAtendidos: e.payload.doc.data()['trabajadores atendidos'],
            audienciasMas: e.payload.doc.data()['audiencias 2da y mas'],
            expedientesTramite: e.payload.doc.data()['expediente tramite1'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

}
