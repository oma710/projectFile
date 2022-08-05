import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AffichageComponent} from "./affichage/affichage.component";

const routes: Routes = [
  { path: 'list', component: AffichageComponent },
  { path: '',   redirectTo: '/List', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
