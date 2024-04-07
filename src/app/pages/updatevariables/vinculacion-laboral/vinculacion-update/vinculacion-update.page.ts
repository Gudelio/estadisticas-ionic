import { Component, Input, OnInit } from '@angular/core';

//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vinculacion-update',
  templateUrl: './vinculacion-update.page.html',
  styleUrls: ['./vinculacion-update.page.scss'],
})
export class VinculacionUpdatePage implements OnInit {

  @Input() id: string;  
  @Input() periodo: string; 
  @Input() personasAtendidas: string;
  @Input() personasColocadas: string;
  @Input() plazasOfrecidas: string;

  constructor(private firestore: AngularFirestore,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  UpdateVinculacionLaboral(periodo, personasAtendidas, personasColocadas, plazasOfrecidas){
    let updateVinculacionLaboral = {}
    updateVinculacionLaboral['periodo'] = periodo,
    updateVinculacionLaboral['personas atendidas'] = personasAtendidas,
    updateVinculacionLaboral['personas colocadas'] = personasColocadas,
    updateVinculacionLaboral['plazas ofrecidas'] = plazasOfrecidas,
    this.firestore.doc('/Variables - Vinculacion Laboral/'+this.id).update(updateVinculacionLaboral).then(()=>{
      this.modalController.dismiss()
    })
  }
  
  CloseModal(){
    this.modalController.dismiss()
  }

}
