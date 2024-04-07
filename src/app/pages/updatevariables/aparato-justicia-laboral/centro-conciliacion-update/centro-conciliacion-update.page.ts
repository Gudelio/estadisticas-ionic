import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-centro-conciliacion-update',
  templateUrl: './centro-conciliacion-update.page.html',
  styleUrls: ['./centro-conciliacion-update.page.scss'],
})
export class CentroConciliacionUpdatePage implements OnInit {

  @Input() id: string;  
  @Input() periodo: string; 
  @Input() orientaciones: string;
  @Input() gruposVulnerables: string;
  @Input() asesorias: string;
  @Input() solicitudesConfirmadas: string;
  @Input() audienciasDesahogadas: string;
  @Input() conveniosRealizados: string;
  @Input() montoConvenido: string;
  @Input() constanciasnoConciliacion: string;
  @Input() archivados: string;
  @Input() trabajadoresAtendidos: string;
  @Input() audienciasMas: string;
  @Input() expedientesTramite: string;


  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateCentroConciliacion(periodo, orientaciones, gruposVulnerables, asesorias, solicitudesConfirmadas, audienciasDesahogadas, conveniosRealizados, montoConvenido, constanciasnoConciliacion, archivados, trabajadoresAtendidos, audienciasMas, expedientesTramite){
    let updateCentroConciliacion = {}
    updateCentroConciliacion['periodo'] = periodo,
    updateCentroConciliacion['orientaciones modulo'] = orientaciones,
    updateCentroConciliacion['grupos vulnerables'] = gruposVulnerables,
    updateCentroConciliacion['asesorias'] = asesorias,
    updateCentroConciliacion['solicitudes confirmadas'] =solicitudesConfirmadas
    updateCentroConciliacion['audiencias desahogadas'] = audienciasDesahogadas
    updateCentroConciliacion['convenios realizados'] = conveniosRealizados
    updateCentroConciliacion['monto convenido'] = montoConvenido
    updateCentroConciliacion['constancias no conciliacion'] = constanciasnoConciliacion
    updateCentroConciliacion['archivados'] = archivados
    updateCentroConciliacion['trabajadores atendidos'] = trabajadoresAtendidos
    updateCentroConciliacion['audiencias 2da y mas'] = audienciasMas
    updateCentroConciliacion['expediente tramite1'] = expedientesTramite
    this.firestore.doc('/Variables - Centro de Conciliacion/'+this.id).update(updateCentroConciliacion).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
