import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertDashboardComponent } from './alert-dashboard/alert-dashboard.component';

const routes: Routes = [

 { path: 'alertes', component: AlertDashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
