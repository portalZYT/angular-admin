import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 注册当前路由
import { PermissionRoutingModules } from './permission-routing.module';
// 导入子页面组件
import { PermissPageComponent } from './PermissPage/PermissPage.component';
import { PermissDirectiveComponent } from './PermissDirective/PermissDirective.component';
import { PermissRoleComponent } from './PermissRole/PermissRole.component';

@NgModule({
    declarations: [PermissPageComponent, PermissDirectiveComponent, PermissRoleComponent],
    imports: [CommonModule],
    exports: [
        PermissionRoutingModules
    ],
    providers: [],
})


export class PermissionModule { }
