import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { FirestimgService } from 'src/app/services/firestimg.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Semaforo } from 'src/app/models/models/models.page';
import { finalize } from 'rxjs/operators';
import { FirestorageService } from 'src/app/services/firestorage.service';


@Component({
  selector: 'app-demandas-tramite',
  templateUrl: './demandas-tramite.page.html',
  styleUrls: ['./demandas-tramite.page.scss'],
})
export class DemandasTramitePage implements OnInit {

  semaforosTramite: Semaforo[] = [];

  newSemaforoTramite: Semaforo;

  enableNewSemaforoTramite = false;

  private path = 'Semaforo - Demandas Trámite/';


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
    this.getSemaforosTramite();
  }

  async guardarSemaforoTramite() {
    this.presentLoading();
    const path = 'Semaforo - Demandas Trámite';
    const name = this.newSemaforoTramite.nombre;
    if (this.newFile !== undefined) {
      const res = await this.firestorageService.uploadImage(this.newFile, path, name);
      this.newSemaforoTramite.foto = res;
    }
    this.firestoreService.createDoc(this.newSemaforoTramite, this.path, this.newSemaforoTramite.id).then( res => {
         this.loading.dismiss();
         this.presentToast('Guardado con éxito');
    }).catch( error => {
       this.presentToast('No se pudo guardar');
    });
}

getSemaforosTramite() {
  this.firestoreService.getCollection<Semaforo>(this.path).subscribe(  res => {
         this.semaforosTramite = res;
  });
}

async deleteSemaforoTramite(post: Semaforo) {

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
  this.enableNewSemaforoTramite = true;
  this.newSemaforoTramite = {
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
            this.newSemaforoTramite.foto = image.target.result as string;
        });
        reader.readAsDataURL(event.target.files[0]);
      }
}

  MontoLaudos(){
    this.nav.navigateForward(['updatesemaforo/monto-laudos']);
  }


}
