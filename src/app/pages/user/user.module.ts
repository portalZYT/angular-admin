import { NgModule } from '@angular/core';
// 接收可以使用Nfif, Ngfor
import { CommonModule } from '@angular/common';
// 导入路由
import { UserRoutingModule } from './user-routing.module';
// 导入子组件/
import { LoginComponent } from './login/login.component';
// 注册反应式表单模块
import { ReactiveFormsModule } from '@angular/forms';
// ----------第三方插件---------
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule(
    {
        declarations: [
            // 导入子组件/
            LoginComponent
        ],
        imports: [
            // 注册反应式表单模块
            ReactiveFormsModule,
            // 接收可以使用Nfif, Ngfor
            CommonModule,
            // 导入ng-zorro-antd模块
            NgZorroAntdModule],
        exports: [
            // 当前路由信息
            UserRoutingModule,
        ]
    }
)
export class UserModule { }
