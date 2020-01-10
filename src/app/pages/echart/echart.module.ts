import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 注册当前路由
import { EchartRoutingModules } from './echart-routing.module';
// // 导入子页面组件
import { BaiduEchartsComponent } from './baiduEcharts/baiduEcharts.component';
@NgModule({
  declarations: [BaiduEchartsComponent],
  imports: [CommonModule],
  exports: [
    EchartRoutingModules
  ],
  providers: [],
})


export class EchartModule { }