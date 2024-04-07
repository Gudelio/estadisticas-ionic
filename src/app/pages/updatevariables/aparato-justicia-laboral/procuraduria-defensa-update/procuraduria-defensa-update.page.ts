import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-procuraduria-defensa-update',
  templateUrl: './procuraduria-defensa-update.page.html',
  styleUrls: ['./procuraduria-defensa-update.page.scss'],
})
export class ProcuraduriaDefensaUpdatePage implements OnInit {

  @Input() id: string;  
  @Input() periodo: string; 
  @Input() asesoriasQuejasRecibidas: string;
  @Input() conciliaciones: string;
  @Input() convenios: string;
  @Input() demandas: string;
  @Input() cantidadRecuperada: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateProcuraduriaDefensa(periodo, asesoriasQuejasRecibidas, conciliaciones, convenios, demandas, cantidadRecuperada){
    let updateProcuraduriaDefensa = {}
    updateProcuraduriaDefensa['periodo'] = periodo,
    updateProcuraduriaDefensa['asesorias quejas recibidas'] = asesoriasQuejasRecibidas,
    updateProcuraduriaDefensa['conciliaciones'] = conciliaciones,
    updateProcuraduriaDefensa['convenios'] = convenios,
    updateProcuraduriaDefensa['demandas'] = demandas,
    updateProcuraduriaDefensa['cantidad recuerada'] = cantidadRecuperada,
    this.firestore.doc('/Variables - Procuraduria Defensa/'+this.id).update(updateProcuraduriaDefensa).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
