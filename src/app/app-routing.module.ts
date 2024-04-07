import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { canActivate } from '@angular/fire/compat/auth-guard';
import { map } from 'rxjs/operators';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule), canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule), canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule), canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule), canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'models',
    loadChildren: () => import('./models/models/models.module').then( m => m.ModelsPageModule)
  },
  {
    path: 'semaforo',
    loadChildren: () => import('./pages/semaforo/semaforo.module').then( m => m.SemaforoPageModule)
  },
  {
    path: 'estadisticalaboral',
    loadChildren: () => import('./pages/estadisticalaboral/estadisticalaboral.module').then( m => m.EstadisticalaboralPageModule)
  },
  {
    path: 'updateestadistica',
    loadChildren: () => import('./pages/updateestadistica/updateestadistica.module').then( m => m.UpdateestadisticaPageModule)
  },
  {
    path: 'updatevariables',
    loadChildren: () => import('./pages/updatevariables/updatevariables.module').then( m => m.UpdatevariablesPageModule)
  },
  {
    path: 'updatesemaforo',
    loadChildren: () => import('./pages/updatesemaforo/updatesemaforo.module').then( m => m.UpdatesemaforoPageModule)
  },
  {
    path: 'variables',
    loadChildren: () => import('./pages/variables/variables.module').then( m => m.VariablesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
