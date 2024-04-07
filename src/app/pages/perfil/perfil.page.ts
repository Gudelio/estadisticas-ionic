import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserI } from 'src/app/models/models/models.page';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

   uid: string = null;
   info: UserI = null;

  constructor(private auth: AuthService, private firestore: FirestoreService , private router: Router, 
    private interaction: InteractionService, private authfirebase: AngularFireAuth, private nav: NavController) { }

  async ngOnInit() {
    console.log('estoy en perfil');
    this.auth.stateUser().subscribe( res => {
      console.log('en perfil - estado autenticación -> ', res);
      this.getUid();
    });
    this.getUid(); 
  }

  async getUid() {
    const uid = await this.auth.getUid();
    if (uid) {
      this.uid = uid;
      console.log('uid ->', this.uid);
      this.getInfoUser();      
    } else {
      console.log('no existe uid');
    }
  }

  getInfoUser() {
    const path = 'usuarios';
    const id = this.uid;
    this.firestore.getDoc<UserI>(path, id).subscribe( res => {
      if (res) {
        this.info = res;
      }
      console.log('los datos son -> ', res);    
    })
  }


  logoutPage() {
    this.auth.signOut();
    this.interaction.presentToast('Sesión finalizada')
    this.router.navigate(['principal']);
  }


  



}
