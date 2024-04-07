import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserI } from 'src/app/models/models/models.page';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  login: boolean =false;
  rol: 'visitante' | 'admin' =null;

  constructor(private auth: AuthService , private firestore: FirestoreService , 
    private router: Router, private nav: NavController) { 
    this.auth.stateUser().subscribe( res => {
      if (res) {
        console.log('está logeado');
        this.login = true;
        this.getDatosUser(res.uid)
      } else {
        console.log('no está logeado');
        this.login = false;
      }      
    })
  }

  ngOnInit() {
  }

  getDatosUser(uid: string){
    const path = 'usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe( res => {
      console.log('datos ->', res);
      if (res) {
        this.rol = res.perfil
      }
    })
  }


}
