import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { CentroConciliacionUpdatePage } from '../centro-conciliacion-update/centro-conciliacion-update.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-centro-conciliacion',
  templateUrl: './centro-conciliacion.page.html',
  styleUrls: ['./centro-conciliacion.page.scss'],
})
export class CentroConciliacionPage implements OnInit {

  doc: any;
  CentroConciliacion: { id: string; periodo: string; orientaciones: string; gruposVulnerables: string; asesorias: string; solicitudesConfirmadas: string; audienciasDesahogadas: string; conveniosRealizados: string; montoConvenido: string; constanciasnoConciliacion: string; archivados: string, trabajadoresAtendidos: string; audienciasMas: string; expedientesTramite: string; opciones: string;}[];
  addCentroConciliacion: {periodo: string; orientaciones: string; gruposVulnerables: string; asesorias: string; solicitudesConfirmadas: string; audienciasDesahogadas: string; conveniosRealizados: string; montoConvenido: string; constanciasnoConciliacion: string; archivados: string, trabajadoresAtendidos: string; audienciasMas: string; expedientesTramite: string; opciones:string };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addCentroConciliacion = {periodo:'', orientaciones: null, gruposVulnerables: null, asesorias: null, solicitudesConfirmadas: null, audienciasDesahogadas: null, conveniosRealizados: null, montoConvenido: null, constanciasnoConciliacion: null, archivados: null, trabajadoresAtendidos: null, audienciasMas: null, expedientesTramite: null, opciones: null}    
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
            constanciasnoConciliacion: e.payload.doc.data()['constancias no conciliacion'],
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

  AddCentroConciliacion(periodo, orientaciones, gruposVulnerables, asesorias, solicitudesConfirmadas, audienciasDesahogadas, conveniosRealizados, montoConvenido, constanciasnoConciliacion, archivados, trabajadoresAtendidos, audienciasMas, expedientesTramite, opciones){
    let addCentroConciliacion = {}
    addCentroConciliacion['periodo'] = periodo
    addCentroConciliacion['orientaciones modulo'] = orientaciones
    addCentroConciliacion['grupos vulnerables'] = gruposVulnerables
    addCentroConciliacion['asesorias'] = asesorias
    addCentroConciliacion['solicitudes confirmadas'] = solicitudesConfirmadas
    addCentroConciliacion['audiencias desahogadas'] = audienciasDesahogadas
    addCentroConciliacion['convenios realizados'] = conveniosRealizados
    addCentroConciliacion['monto convenido'] = montoConvenido
    addCentroConciliacion['constancias no conciliacion'] = constanciasnoConciliacion
    addCentroConciliacion['archivados'] = archivados
    addCentroConciliacion['trabajadores atendidos'] = trabajadoresAtendidos
    addCentroConciliacion['audiencias 2da y mas'] = audienciasMas
    addCentroConciliacion['expediente tramite1'] = expedientesTramite
    addCentroConciliacion['opciones'] = opciones
    console.log(addCentroConciliacion)
    this.firestore.collection('/Variables - Centro de Conciliacion/').add(addCentroConciliacion).then(()=>{
      this.addCentroConciliacion = {periodo:'', orientaciones: null, gruposVulnerables: null, asesorias: null, solicitudesConfirmadas: null, audienciasDesahogadas: null, conveniosRealizados: null, montoConvenido: null, constanciasnoConciliacion: null, archivados: null, trabajadoresAtendidos: null, audienciasMas: null, expedientesTramite: null, opciones: null } 
    })
  }

  async UpdateCentroConciliacion(id, periodo, orientaciones, gruposVulnerables, asesorias, solicitudesConfirmadas, audienciasDesahogadas, conveniosRealizados, montoConvenido, constanciasnoConciliacion, archivados, trabajadoresAtendidos, audienciasMas, expedientesTramite) {
    const modal = await this.modalController.create({
      component:  CentroConciliacionUpdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'periodo': periodo,
          'orientaciones': orientaciones,
          'gruposVulnerables': gruposVulnerables,
          'asesorias': asesorias,
          'solicitudesConfirmadas': solicitudesConfirmadas,
          'audienciasDesahogadas': audienciasDesahogadas,
          'conveniosRealizados': conveniosRealizados,
          'montoConvenido': montoConvenido,
          'constanciasnoConciliacion': constanciasnoConciliacion,
          'archivados': archivados,
          'trabajadoresAtendidos': trabajadoresAtendidos,
          'audienciasMas': audienciasMas,
          'expedientesTramite': expedientesTramite
      }
    });
    return await modal.present();
  }

  DeleteCentroConciliacion(id){
    this.firestore.doc('/Variables - Centro de Conciliacion/'+id).delete()
  }

}
