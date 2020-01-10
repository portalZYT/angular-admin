import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaiduEchartsComponent } from './baiduEcharts/baiduEcharts.component';


const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: BaiduEchartsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EchartRoutingModules { }