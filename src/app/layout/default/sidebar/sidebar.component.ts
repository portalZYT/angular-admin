import { Component, OnInit, NgZone } from '@angular/core';

// 引入获取数据方法
import { MenuService } from 'src/app/service/core/menu/menu.service';
// 引入定义数据类型
import { MenuInfo } from 'src/app/service/core/menu/module/menu-info';
// 引入是否折叠数据类型
import { LayoutInfo } from 'src/app/core/setting/models/layout-info';
// 引入折叠数据服务
import { SettingsService } from 'src/app/core/setting/setting.service';
// observable 序列来编写异步和基于事件的程序
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  // 初始化数据，为列表数据
  menus: MenuInfo[];
  // 是否折叠
  layout: LayoutInfo;

  private unsubscribe$ = new Subject<void>();
  // constructor --->  注入依赖，特别是在TypeScript开发Angular工程时
  constructor(
    settingService: SettingsService,
    private menuService: MenuService,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.menus = menuService.getMenus();
    this.layout = settingService.getLayout();
  }

  ngOnInit(): void {
    // console.log(this.menus)
    // console.log(this.layout)

    this.openedByUrl(this.router.url);
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe((e: NavigationEnd) => {
        this.openedByUrl(e.urlAfterRedirects);
      });
  }
  navigateTo(menu: MenuInfo) {
    if (!menu.disable && menu.url) {
      this.ngZone.run(() => this.router.navigateByUrl(menu.url));
    }
  }

  openedByUrl(url: string) {
    const resetItems: MenuInfo[] = [];
    let findItem: MenuInfo;

    while (url) {
      this.menuService.visit(this.menus, menu => {
        if (menu._selected || menu._open) {
          resetItems.push(menu);
        }

        if (menu.url && menu.url === url) {
          findItem = menu;
        }
      });
      if (findItem) {
        break;
      }

      url = url
        .split('/')
        .slice(0, -1)
        .join('/');
    }

    if (findItem) {
      resetItems.forEach(resetItem => {
        resetItem._selected = false;
        resetItem._open = false;
      });
      while (findItem) {
        if (findItem.children && !this.layout.collapsed) {
          findItem._open = true;
        } else {
          findItem._selected = true;
        }
        findItem = findItem._parent;
      }
    }
  }

  openMenu(id: string) {
    this.menuService.visit(this.menus, menu => {
      if (menu._open && menu.id !== id) {
        menu._open = false;
      }
    });
  }

}
