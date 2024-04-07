import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tribunal-arbitraje',
  templateUrl: './tribunal-arbitraje.page.html',
  styleUrls: ['./tribunal-arbitraje.page.scss'],
})
export class TribunalArbitrajePage implements OnInit {

  doc: any;
  TribunalArbitraje: { id: string; periodo: string; demandasContraGobiernos: string; demandasContraMunicipios: string; demandasContraDependencias: string; demandasContraOPDs: string; totalConveniosRealizados: string; laudos: string; conveniosCumplimientoLaudo: string; trabajadoresBeneficiados: string; cantidadRecuperadaEjecucion: string; opciones: string;}[];
  addTribunalArbitraje: {periodo: string; demandasContraGobiernos: string; demandasContraMunicipios: string; demandasContraDependencias: string; demandasContraOPDs: string; totalConveniosRealizados: string; laudos: string; conveniosCumplimientoLaudo: string; trabajadoresBeneficiados: string; cantidadRecuperadaEjecucion: string; opciones:string };

  constructor(private firestore: AngularFirestore) { }

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

}
