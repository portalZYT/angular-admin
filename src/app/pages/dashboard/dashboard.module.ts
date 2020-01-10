import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 注册当前路由
import { TableRoutingModules } from './dashboard-routing.module';
// 导入子页面组件
import { TableDashboardComponent } from './Table/table.component';
@NgModule({
  declarations: [TableDashboardComponent],
  imports: [CommonModule],
  exports: [
    TableRoutingModules
  ],
  providers: [],
})


export class TableModule { }
