import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDashboardComponent } from './Table/table.component';


const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: TableDashboardComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TableRoutingModules { }