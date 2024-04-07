import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventualPage } from './eventual.page';

const routes: Routes = [
  {
    path: 'eventual',
    component: EventualPage,
    children:[
      {path:"eventualt", loadChildren:()=> import('src/app/pages/estadisticalaboral/eventualt/eventualt.module').then(res => res.EventualtPageModule)},
      {path:"eventualg", loadChildren:()=> import ('src/app/pages/estadisticalaboral/eventualg/eventualg.module').then( res => res.EventualgPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "eventual/eventualt",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventualPageRoutingModule {}
