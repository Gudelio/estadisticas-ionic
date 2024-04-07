import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { TribunalArbitrajeUpdatePage } from '../tribunal-arbitraje-update/tribunal-arbitraje-update.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tribunal-arbitraje',
  templateUrl: './tribunal-arbitraje.page.html',
  styleUrls: ['./tribunal-arbitraje.page.scss'],
})
export class TribunalArbitrajePage implements OnInit {

  doc: any;
  TribunalArbitraje: { id: string; periodo: string; demandasContraGobiernos: string; demandasContraMunicipios: string; demandasContraDependencias: string; demandasContraOPDs: string; totalConveniosRealizados: string; laudos: string; conveniosCumplimientoLaudo: string; trabajadoresBeneficiados: string; cantidadRecuperadaEjecucion: string; opciones: string;}[];
  addTribunalArbitraje: {periodo: string; demandasContraGobiernos: string; demandasContraMunicipios: string; demandasContraDependencias: string; demandasContraOPDs: string; totalConveniosRealizados: string; laudos: string; conveniosCumplimientoLaudo: string; trabajadoresBeneficiados: string; cantidadRecuperadaEjecucion: string; opciones:string };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addTribunalArbitraje = {periodo:'', demandasContraGobiernos: null, demandasContraMunicipios: null, demandasContraDependencias: null, demandasContraOPDs: null, totalConveniosRealizados: null, laudos: null, conveniosCumplimientoLaudo: null, trabajadoresBeneficiados: null, cantidadRecuperadaEjecucion: null, opciones: null}    
    this.firestore.collection('/Variables - Tribunal Arbitraje/', ref => ref.orderBy('periodo', 'desc')).snapshotChanges().subscribe(res=>{
      if(res){
        this.TribunalArbitraje = res.map(e=>{
          return{
            id: e.payload.doc['id'],
            periodo: e.payload.doc.data()['periodo'],
            demandasContraGobiernos: e.payload.doc.data()['demandas contra gobiernos'],
            demandasContraMunicipios: e.payload.doc.data()['demandas contra municipios'],
            demandasContraDependencias: e.payload.doc.data()['demandas contra dependencias'],
            demandasContraOPDs: e.payload.doc.data()['demandas contra OPDs'],
            totalConveniosRealizados: e.payload.doc.data()['total convenios realizados'],
            laudos: e.payload.doc.data()['laudos'],
            conveniosCumplimientoLaudo: e.payload.doc.data()['convenios cumplimiento laudo'],
            trabajadoresBeneficiados: e.payload.doc.data()['trabajadores beneficiados'],
            cantidadRecuperadaEjecucion: e.payload.doc.data()['cantidad recuperada ejecucion'],
            opciones: e.payload.doc.data()['opciones']
          }
        })   
      }  
    })
  }

  AddTribunalArbitraje(periodo, demandasContraGobiernos, demandasContraMunicipios, demandasContraDependencias, demandasContraOPDs, totalConveniosRealizados, laudos, conveniosCumplimientoLaudo, trabajadoresBeneficiados, cantidadRecuperadaEjecucion, opciones){
    let addTribunalArbitraje = {}
    addTribunalArbitraje['periodo'] = periodo
    addTribunalArbitraje['demandas contra gobiernos'] = demandasContraGobiernos
    addTribunalArbitraje['demandas contra municipios'] = demandasContraMunicipios
    addTribunalArbitraje['demandas contra dependencias'] = demandasContraDependencias
    addTribunalArbitraje['demandas contra OPDs'] = demandasContraOPDs
    addTribunalArbitraje['total convenios realizados'] = totalConveniosRealizados
    addTribunalArbitraje['laudos'] = laudos
    addTribunalArbitraje['convenios cumplimiento laudo'] = conveniosCumplimientoLaudo
    addTribunalArbitraje['trabajadores beneficiados'] = trabajadoresBeneficiados
    addTribunalArbitraje['cantidad recuperada ejecucion'] = cantidadRecuperadaEjecucion
    addTribunalArbitraje['opciones'] = opciones
    console.log(addTribunalArbitraje)
    this.firestore.collection('/Variables - Tribunal Arbitraje/').add(addTribunalArbitraje).then(()=>{
      this.addTribunalArbitraje = {periodo:'', demandasContraGobiernos: null, demandasContraMunicipios: null, demandasContraDependencias: null, demandasContraOPDs: null, totalConveniosRealizados: null, laudos: null, conveniosCumplimientoLaudo: null, trabajadoresBeneficiados: null, cantidadRecuperadaEjecucion: null, opciones: null } 
    })
  }

  async UpdateTribunalArbitraje(id, periodo, demandasContraGobiernos, demandasContraMunicipios, demandasContraDependencias, demandasContraOPDs, totalConveniosRealizados, laudos, conveniosCumplimientoLaudo, trabajadoresBeneficiados, cantidadRecuperadaEjecucion) {
    const modal = await this.modalController.create({
      component:  TribunalArbitrajeUpdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'periodo': periodo,
          'demandasContraGobiernos': demandasContraGobiernos,
          'demandasContraMunicipios': demandasContraMunicipios,
          'demandasContraDependencias': demandasContraDependencias,
          'demandasContraOPDs': demandasContraOPDs,
          'totalConveniosRealizados': totalConveniosRealizados,
          'laudos': laudos,
          'conveniosCumplimientoLaudo': conveniosCumplimientoLaudo,
          'trabajadoresBeneficiados': trabajadoresBeneficiados,
          'cantidadRecuperadaEjecucion': cantidadRecuperadaEjecucion
      }
    });
    return await modal.present();
  }

  DeleteTribunalArbitraje(id){
    this.firestore.doc('/Variables - Tribunal Arbitraje/'+id).delete()
  }

}
