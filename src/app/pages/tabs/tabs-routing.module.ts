import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {path:"home", loadChildren:()=> import('src/app/pages/home/home.module').then(res => res.HomePageModule)},
      {path:"update", loadChildren:()=> import ('src/app/pages/update/update.module').then( res => res.UpdatePageModule)},
      {path:"info", loadChildren: () => import ('src/app/pages/info/info.module').then( res => res.InfoPageModule)},
      {path:"perfil", loadChildren: () => import ('src/app/pages/perfil/perfil.module').then( res => res.PerfilPageModule)}
    ]
  },
  {
    path:"",
    redirectTo: "tabs/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
