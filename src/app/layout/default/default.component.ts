import { OnInit, Component, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Router, RouteConfigLoadStart, NavigationError, NavigationCancel, NavigationEnd } from '@angular/router';
// observable 序列来编写异步和基于事件的程序
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd';
import { LayoutInfo } from 'src/app/core/setting/models/layout-info';
import { SettingsService } from 'src/app/core/setting/setting.service';

@Component({
  selector: 'app-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})

// implements: typescript implements 接口实现
export class LayoutDefaultComponent implements OnInit, OnDestroy {


  private unsubscribe$ = new Subject<void>();
  triggerTemplate = null;
  isFetching = false;
  isShow = true;
  layout: LayoutInfo;

  @ViewChild('trigger', { static: true }) customTrigger: TemplateRef<void>;

  // 自定义触发器可以是TemplateRef
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor(
    private router: Router,
    private settingsService: SettingsService,
    private notification: NzNotificationService
  ) { }

  // 初始化指令/组件
  ngOnInit() {
    // 获取到layout
    this.layout = this.settingsService.getLayout();
    // takeUntil(控制数据流) ， subscribe(方法)
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
        this.isFetching = false;
        if (evt instanceof NavigationError) {
          this.notification.create(
            'error',
            '错误通知',
            `无法加载${evt.url}路由`
          );
        }
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      setTimeout(() => {
        this.isFetching = false;
      }, 100);
    });
  }
  ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
