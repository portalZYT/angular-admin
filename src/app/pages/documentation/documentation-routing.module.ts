import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './Document/document.component';


const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: DocumentComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DocumentationRoutingModules { }