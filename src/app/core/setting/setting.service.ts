import { Injectable } from '@angular/core';
import { AppInfo } from './models/app-info';
import { LayoutInfo } from './models/layout-info';

const APP = 'app';
const LAYOUT = 'layout';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private app: AppInfo;
  private layout: LayoutInfo;

  constructor() {
    this.app = {
      name: 'admin',
      description: 'admin base on angular'
    };
    this.layout = { collapsed: false };
  }

  private get(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  private set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLayout() {
    return this.layout;
  }

  setLayout(name: string | LayoutInfo, value?: any) {
    if (typeof name === 'string') {
      this.layout[name] = value;
      console.log(this.layout);
      console.log(this.layout[name]);
    } else {
      this.layout = name;
    }
    this.set(LAYOUT, this.layout);
  }

  getApp() {
    return this.app;
  }

  setApp(value: AppInfo) {
    this.app = value;
    this.set(APP, value);
  }
}
