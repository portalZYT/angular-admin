import { NgModule } from '@angular/core';
// Module 用于NgModule
// import { TestComponent } from './test.component';


// 导入路由
import { TestRoute } from './test.route';

// ----------第三方插件---------
import { NgZorroAntdModule } from 'ng-zorro-antd';
// 注册反应式表单模块
import { ReactiveFormsModule } from '@angular/forms';
// 导入子组件/
import { TestHomeComponent } from './home/home.component';
// 当要构建模板驱动表单时
import { FormsModule } from '@angular/forms';
// 接收可以使用Nfif, Ngfor
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [FormsModule, NgZorroAntdModule, ReactiveFormsModule, CommonModule],
    declarations: [TestHomeComponent],
    exports: [TestRoute]
})

export class TestModule { }
