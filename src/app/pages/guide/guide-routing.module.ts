import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuiComponent } from './gui/gui.component';


const routes: Routes = [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: GuiComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GuideRoutingModules { }