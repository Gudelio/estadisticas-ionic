import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-servicios-icathi-update',
  templateUrl: './servicios-icathi-update.page.html',
  styleUrls: ['./servicios-icathi-update.page.scss'],
})
export class ServiciosIcathiUpdatePage implements OnInit {

  @Input() id: string;  
  @Input() periodo: string; 
  @Input() proyectosIncubadora: string;
  @Input() empresasIncubadas: string;
  @Input() certificadosOtorgados: string;
  @Input() conveniosFirmados: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateServiciosIcathi(periodo, proyectosIncubadora, empresasIncubadas, certificadosOtorgados, conveniosFirmados){
    let updateServiciosIcathi = {}
    updateServiciosIcathi['periodo'] = periodo,
    updateServiciosIcathi['proyectos incubadora'] = proyectosIncubadora,
    updateServiciosIcathi['empresas incubadas'] = empresasIncubadas,
    updateServiciosIcathi['certificados otorgados'] = certificadosOtorgados,
    updateServiciosIcathi['convenios firmados'] = conveniosFirmados,
    this.firestore.doc('/Variables - Servicios ICATHI/'+this.id).update(updateServiciosIcathi).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
