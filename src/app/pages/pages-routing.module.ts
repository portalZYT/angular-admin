import { NgModule } from '@angular/core';
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { Routes, RouterModule } from '@angular/router';

/**路由规则:
 * 1. pages-routing.module.ts 引入子页面,  用 '#' 连接子页面暴露的接口名称--- dashboard/dashboard.module.ts --> TableModule
 * 2. 子页面dashboard/dashboard.module.ts   ---> 注册当前页面的路由组件---- /dashboard-routing.module.ts
 * 3. 当前页面的路由页 注册当前页面的路由，并提供路由名称----将Table 子页面的table.component.ts  引入
 * 4. 最后在子页面Table页面 进行导入HTML/css 文件
 */


const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#TableModule'
      },
      {
        path: 'documentation',
        loadChildren: './documentation/documentation.module#DocumentModule'
      },
      {
        path: 'guide',
        loadChildren: './guide/guide.module#GuideModule'
      },
      {
        path: 'permission',
        loadChildren: './permission/permission.module#PermissionModule'
      },
      {
        path: 'echart',
        loadChildren: './echart/echart.module#EchartModule'
      }
    ]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }
  ,
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
