import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissPageComponent } from './PermissPage/PermissPage.component';
import { PermissDirectiveComponent } from './PermissDirective/PermissDirective.component';
import { PermissRoleComponent } from './PermissRole/PermissRole.component';


const routes: Routes = [
    { path: 'page', component: PermissPageComponent },
    { path: 'directive', component: PermissDirectiveComponent },
    { path: 'role', component: PermissRoleComponent }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PermissionRoutingModules { }