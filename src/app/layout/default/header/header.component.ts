import { Component, OnDestroy, OnInit } from '@angular/core';

import { LayoutInfo } from 'src/app/core/setting/models/layout-info';
import { SettingsService } from 'src/app/core/setting/setting.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {

  layout: LayoutInfo;

  constructor(
    private router: Router,
    private settingService: SettingsService
  ) {
    this.layout = this.settingService.getLayout();
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  toggleCollapsedSidebar() {
    // 传入当前的Collapsed 状态
    this.settingService.setLayout('collapsed', !this.layout.collapsed);
  }
  log(data: string): void {
    console.log(data);
  }
  logout() {
    console.log('退出登录');
    this.router.navigate(['/user/login']);
  }
}
