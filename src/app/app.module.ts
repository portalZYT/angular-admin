// -----------Angular/------------
// 当想要在浏览器中运行时
import { BrowserModule } from '@angular/platform-browser';
// 用于配置注入器和编译器
import { NgModule, APP_INITIALIZER } from '@angular/core';
// 当要构建模板驱动表单时
import { FormsModule } from '@angular/forms';
// 和服务器对象进行联系
import { HttpClientModule } from '@angular/common/http';
// Angular动画函数
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 接收可以使用Nfif, Ngfor
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
// ----------第三方插件---------
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

// 引入路由模块信息
import { AppRoutingModule } from './app-routing.module';
// 类似于vue的组件/模块 注册组件OR模块
import { AppComponent } from './app.component';
// 引入ICON
import { IconsProviderModule } from './icons-provider.module';

// ----------注册layout页面------------
import { LayoutModule } from './layout/layout.module';
// 引入主页模块
import { PagesModule } from './pages/pages.module';
// 注册反应式表单模块
import { ReactiveFormsModule } from '@angular/forms';

// 配置angular i18n
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

// 项目初始化加载路由信息配置
import { StartupServiceFactory } from './core/startup/startup.factory';
import { StartupService } from './core/startup/startup.service';

registerLocaleData(zh);

@NgModule({
  // 模块内部的列表,声明这个模块
  declarations: [AppComponent],
  // 导入其他module， 其他模块暴露出的，比如CommonModule,以后接收可以使用Nfif,Ngfor
  imports: [
    // 注册表单
    ReactiveFormsModule,
    LayoutModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    RouterModule,
    // 导入ng-zorro-antd模块
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  // 指定应用程序的根级别需要使用的service：【配置ng-zorro-antd国际化(文案及日期)】
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ],
  // 通常是app启动的根组件, 一般只有一个component. bootstrap中组件会自动被放入到entryComponents中
  bootstrap: [AppComponent]
  // entryCompoenents: 不会再模板中被引用到的组件。这个属性一般情况下只有ng自己使用，一般是bootstrap组件或者路由组件，ng会自动把bootstrap、路由组件放入其中。 除非不通过路由动态将component加入到dom中，否则不会用到这个属性
})
export class AppModule {}
