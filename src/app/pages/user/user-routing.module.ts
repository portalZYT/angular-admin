import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
const routes: Routes = [
    // {
    //     path: '', redirectTo: 'home'
    // },
    // {
    //     path: 'home', children: [
    //         {
    //             path: '', redirectTo: 'login', pathMatch: 'full'
    //         },
    //         {
    //             path: 'login', component: LoginComponent
    //         }
    //     ]
    // }
    {
        path: '', redirectTo: 'login'
    },
    {
        path: 'login', component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class UserRoutingModule { }
