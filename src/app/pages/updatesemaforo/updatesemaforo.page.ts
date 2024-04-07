import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { FirestimgService } from '../../services/firestimg.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Semaforo } from 'src/app/models/models/models.page';
import { finalize } from 'rxjs/operators';
import { FirestorageService } from '../../services/firestorage.service';

@Component({
  selector: 'app-updatesemaforo',
  templateUrl: './updatesemaforo.page.html',
  styleUrls: ['./updatesemaforo.page.scss'],
})
export class UpdatesemaforoPage implements OnInit {

  semaforos: Semaforo[] = [];

  newSemaforo: Semaforo;

  enableNewSemaforo = false;

  private path = 'Semaforo - Semaforo Global/';


  newImage = '';
  newFile: any;

  loading: any;

  constructor(public firestoreService: FirestimgService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    public firestorageService: FirestorageService,
    private nav: NavController) { }

  ngOnInit() {
    this.getSemaforos();
  }

  async guardarSemaforo() {
    this.presentLoading();
    const path = 'Semaforo - Semaforo Global';
    const name = this.newSemaforo.nombre;
    if (this.newFile !== undefined) {
      const res = await this.firestorageService.uploadImage(this.newFile, path, name);
      this.newSemaforo.foto = res;
    }
    this.firestoreService.createDoc(this.newSemaforo, this.path, this.newSemaforo.id).then( res => {
         this.loading.dismiss();
         this.presentToast('Guardado con éxito');
    }).catch( error => {
       this.presentToast('No se pudo guardar');
    });
}

getSemaforos() {
  this.firestoreService.getCollection<Semaforo>(this.path).subscribe(  res => {
         this.semaforos = res;
  });
}

async deleteSemaforo(post: Semaforo) {

    const alert = await this.alertController.create({
      cssClass: 'normal',
      header: 'Advertencia',
      message: ' ¿Seguro que desea eliminar este registro?',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'normal',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            // this.alertController.dismiss();
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.loading = true;
            this.firestoreService.deleteDoc(this.path, post.id).then( res => {
              this.presentToast('Eliminado con éxito');
              this.alertController.dismiss();
            }).catch( error => {
                this.presentToast('No se pudo eliminar');
            });
          }
        }
      ]
    });
    await alert.present();
}

nuevo() {
  this.enableNewSemaforo = true;
  this.newSemaforo = {
    nombre: '',
    descripcion: null,
    foto: 'htt',
    id: this.firestoreService.getId(),
    fecha: new Date()
  };
}


async presentLoading() {
  this.loading = await this.loadingController.create({
    cssClass: 'normal',
    message: 'guardando...',
  });
  await this.loading.present();
}

async presentToast(msg: string) {
  const toast = await this.toastController.create({
    message: msg,
    cssClass: 'normal',
    duration: 2000,
    color: 'light',
  });
  toast.present();
}


async newImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
        this.newFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = ((image) => {
            this.newSemaforo.foto = image.target.result as string;
        });
        reader.readAsDataURL(event.target.files[0]);
      }
}

DemandasTramite(){
  this.nav.navigateForward(['updatesemaforo/demandas-tramite']);
}

}
