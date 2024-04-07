import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Import Component for the update function and the Modal controller to handle the component.
import { ServiciosIcathiUpdatePage } from '../servicios-icathi-update/servicios-icathi-update.page';

import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-servicios-icathi',
  templateUrl: './servicios-icathi.page.html',
  styleUrls: ['./servicios-icathi.page.scss'],
})
export class ServiciosIcathiPage implements OnInit {

  doc: any;
  ServiciosIcathi: { id: string; periodo: string; proyectosIncubadora: string; empresasIncubadas: string; certificadosOtorgados: string; conveniosFirmados: string; opciones: string;}[];
  addServiciosIcathi: {periodo: string; proyectosIncubadora: string; empresasIncubadas: string; certificadosOtorgados: string, conveniosFirmados: string;  opciones: string };

  constructor(private nav: NavController, private firestore: AngularFirestore,
    private modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.addServiciosIcathi = {periodo:'', proyectosIncubadora: null, empresasIncubadas: null, certificadosOtorgados: null, conveniosFirmados: null, opciones: null}    
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

  AddServiciosICATHI(periodo, proyectosIncubadora, empresasIncubadas, certificadosOtorgados, conveniosFirmados, opciones){
    let addServiciosIcathi = {}
    addServiciosIcathi['periodo'] = periodo
    addServiciosIcathi['proyectos incubadora'] = proyectosIncubadora
    addServiciosIcathi['empresas incubadas'] = empresasIncubadas
    addServiciosIcathi['certificados otorgados'] = certificadosOtorgados
    addServiciosIcathi['convenios firmados'] = conveniosFirmados
    addServiciosIcathi['opciones'] = opciones
    console.log(addServiciosIcathi)
    this.firestore.collection('/Variables - Servicios ICATHI/').add(addServiciosIcathi).then(()=>{
      this.addServiciosIcathi = {periodo:'', proyectosIncubadora: null, empresasIncubadas: null, certificadosOtorgados: null, conveniosFirmados: null, opciones: null } 
    })
  }

  async UpdateServiciosIcathi(id, periodo, proyectosIncubadora, empresasIncubadas, certificadosOtorgados, conveniosFirmados) {
    const modal = await this.modalController.create({
      component:  ServiciosIcathiUpdatePage,
      cssClass: 'my-custom-class',
      componentProps: {          
          'id': id,
          'periodo': periodo,
          'proyectosIncubadora': proyectosIncubadora,
          'empresasIncubadas': empresasIncubadas,
          'certificadosOtorgados': certificadosOtorgados,
          'conveniosFirmados': conveniosFirmados
      }
    });
    return await modal.present();
  }

  DeleteServiciosIcathi(id){
    this.firestore.doc('/Variables - Servicios ICATHI/'+id).delete()
  }

}
