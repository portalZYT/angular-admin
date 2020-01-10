import { NgModule } from '@angular/core';

// 接收可以使用Nfif, Ngfor
import { CommonModule } from '@angular/common';
import { LayoutDefaultComponent } from './default/default.component';

// 引入header 头部区域
import { HeaderComponent } from './default/header/header.component';
// 引入侧边栏
import { SidebarComponent } from './default/sidebar/sidebar.component';
// ----------第三方插件---------
import { NgZorroAntdModule } from 'ng-zorro-antd';

// 引入当前路由信息模块
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  // 声明模块里有什么东西， 创建的指令和管道pipe,类似于vue - Component 注册组件
  declarations: [
    LayoutDefaultComponent,
    SidebarComponent,
    HeaderComponent
  ],
  // 声明模块所依赖的模块
  imports: [
    // 当前路由信息
    LayoutRoutingModule,
    // 导入ng-zorro-antd模块
    NgZorroAntdModule,
    CommonModule
  ],
  // declarations的子集, 可用于其他模板的组件模板
  exports: [
    LayoutDefaultComponent
  ],
  // 默认情况下是空
  providers: [],
  // 声明模块的主组件是什么
  bootstrap: [],
  entryComponents: []
})


export class LayoutModule { }
