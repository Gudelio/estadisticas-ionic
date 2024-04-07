import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import {AlertController, NavController,LoadingController} from '@ionic/angular'
import {Router} from '@angular/router';
import { UserI } from 'src/app/models/models/models.page';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: UserI = {
  nombre: null,
  telefono: null,
  correo: null,
  uid: null,
  password: null,
  perfil: 'visitante'
  }

  constructor(private auth: AuthService, private firestore: FirestoreService , 
    private interaction: InteractionService, private router: Router, private navCtr: NavController,
    private formbuilder:FormBuilder, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  gotoLoginpage(){
    this.navCtr.navigateForward(['login']);
  }

  async registerUser(){ 
    this.interaction.presentLoading('registrando...')
    console.log('datos -> ', this.datos);
    const res = await this.auth.registerUser(this.datos).catch((error) => {
      this.interaction.dismiss();
      this.interaction.presentToast('No fue posible capturar sus datos')
      console.log('error');
    })
    if (res) {
      console.log('éxito al crear nuevo usuario');
      const path = 'usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password =null
      await this.firestore.createDoc(this.datos, path, id)
      this.interaction.dismiss();
      this.interaction.presentToast('registrado con éxito')
      this.router.navigate(['login']);
    }
  }

}
