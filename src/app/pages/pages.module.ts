// 这是一个模块 ---- NgModule
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
// ----------第三方插件---------
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: []
})

export class PagesModule { }

