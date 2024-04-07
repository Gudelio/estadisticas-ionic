import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TabsPage } from '../tabs/tabs.page';
import { InteractionService } from 'src/app/services/interaction.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales = {
    correo: null,
    password: null
  }
  
  
  loading:any;

  constructor(private auth: AuthService, private interaction: InteractionService, public formbuider: FormBuilder,private router: Router, 
     private nav: NavController, private navCtr: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {}
  async gotoLoginpage() { 
    this.loading = true;
    this.interaction.presentLoading('ingresando...');
    console.log('credenciales -> ', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password) .catch((error) => {
      console.log('error'); 
      this.interaction.dismiss();
      this.interaction.presentToast('Verifique sus datos')
    });
    if (res) {
      console.log('res -> ', res);
      this.interaction.dismiss();
      this.interaction.presentToast('Ingresado con éxito')
      this.nav.navigateForward(['tabs']);
  }

}

registerUser(){
  this.nav.navigateForward(['registro']);
}

}