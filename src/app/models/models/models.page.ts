import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.page.html',
  styleUrls: ['./models.page.scss'],
})
export class ModelsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export interface UserI {
  nombre: string;
  correo: string;
  uid: string;
  password: string;
  telefono: number;
  perfil: 'visitante'| 'admin',
}

export interface Semaforo {
  nombre: string;
  descripcion: string;
  foto: string;
  id: string;
  fecha: Date;
}
