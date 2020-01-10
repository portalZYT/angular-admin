import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 注册当前路由
import { DocumentationRoutingModules } from './documentation-routing.module';
// 导入子页面组件
import { DocumentComponent } from './Document/document.component';
@NgModule({
    declarations: [DocumentComponent],
    imports: [CommonModule],
    exports: [
        DocumentationRoutingModules
    ],
    providers: [],
})


export class DocumentModule { }
