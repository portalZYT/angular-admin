import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 注册当前路由
import { GuideRoutingModules } from './guide-routing.module';
// 导入子页面组件
import { GuiComponent } from './gui/gui.component';
@NgModule({
    declarations: [GuiComponent],
    imports: [CommonModule],
    exports: [
        GuideRoutingModules
    ],
    providers: [],
})


export class GuideModule { }
