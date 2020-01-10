import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {Routes, RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule
  ]
})
export class HomeModule {
}
