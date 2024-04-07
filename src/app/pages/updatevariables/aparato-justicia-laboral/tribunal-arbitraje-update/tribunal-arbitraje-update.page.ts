import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tribunal-arbitraje-update',
  templateUrl: './tribunal-arbitraje-update.page.html',
  styleUrls: ['./tribunal-arbitraje-update.page.scss'],
})
export class TribunalArbitrajeUpdatePage implements OnInit {

  @Input() id: string;  
  @Input() periodo: string; 
  @Input() demandasContraGobiernos: string;
  @Input() demandasContraMunicipios: string;
  @Input() demandasContraDependencias: string;
  @Input() demandasContraOPDs: string;
  @Input() totalConveniosRealizados: string;
  @Input() laudos: string;
  @Input() conveniosCumplimientoLaudo: string;
  @Input() trabajadoresBeneficiados: string;
  @Input() cantidadRecuperadaEjecucion: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateTribunalArbitraje(periodo, demandasContraGobiernos, demandasContraMunicipios, demandasContraDependencias, demandasContraOPDs, totalConveniosRealizados, laudos, conveniosCumplimientoLaudo, trabajadoresBeneficiados, cantidadRecuperadaEjecucion){
    let updateTribunalArbitraje = {}
    updateTribunalArbitraje['periodo'] = periodo,
    updateTribunalArbitraje['demandas contra gobiernos'] = demandasContraGobiernos,
    updateTribunalArbitraje['demandas contra municipios'] = demandasContraMunicipios,
    updateTribunalArbitraje['demandas contra dependencias'] = demandasContraDependencias,
    updateTribunalArbitraje['demandas contra OPDs'] = demandasContraOPDs,
    updateTribunalArbitraje['total convenios realizados'] = totalConveniosRealizados,
    updateTribunalArbitraje['laudos'] = laudos,
    updateTribunalArbitraje['convenios cumplimiento laudo'] = conveniosCumplimientoLaudo,
    updateTribunalArbitraje['trabajadores beneficiados'] = trabajadoresBeneficiados,
    updateTribunalArbitraje['cantidad recuperada ejecucion'] = cantidadRecuperadaEjecucion
    this.firestore.doc('/Variables - Tribunal Arbitraje/'+this.id).update(updateTribunalArbitraje).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }


}
