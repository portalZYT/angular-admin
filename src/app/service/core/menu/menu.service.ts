// 装饰器
import { Injectable } from '@angular/core';
// 引入数据类型
import { MenuInfo } from './module/menu-info';
// 引入angular 请求数据--- 类型
import { HttpClient } from '@angular/common/http';

// Angular在根注入器中注册这个root .root 还可以是某一个具体的模块名.
@Injectable({ providedIn: 'root' })
// 这是一个Http组件
export class MenuService {
  // 定义 menu 数据类型为MenuInfo[]
  private menus: MenuInfo[] = [];

  constructor(private http: HttpClient) {}
  // 获取目录
  getMenus() {
    return this.menus;
  }

  visit(
    data: MenuInfo[],
    callback: (menu: MenuInfo, parentMeny: MenuInfo, level?: number) => void
  ) {
    const inFn = (menus: MenuInfo[], parentMenu: MenuInfo, level: number) => {
      menus.forEach(menu => {
        if (callback) {
          callback(menu, parentMenu, level);
        }
        if (menu.children) {
          inFn(menu.children, menu, level + 1);
        }
      });
    };
    inFn(data, null, 1);
  }

  setMenu(items: MenuInfo[]) {
    this.visit(items, (menu, parentMenu, level) => {
      if (!menu._level) {
        menu._level = level;
      }

      if (!menu._parent) {
        menu._parent = parentMenu;
      }
    });
    this.menus = items;
  }

  // 加载用户菜单
  async load(userId: string) {
    const url = 'assets/data/menus.json';
    return this.http
      .get<MenuInfo[]>(url, {
        params: { userId }
      })
      .subscribe(data => {
        console.log('执行2')
        this.setMenu(data);
      });
  }
}
