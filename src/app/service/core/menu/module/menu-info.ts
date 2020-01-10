// 向外暴露一个接口
export interface MenuInfo {
  [key: string]: any;
  // 唯一id
  id: string;
  // 标题
  title: string;
  // 图标
  icon?: string;
  // 是否禁用
  disable?: boolean;
  // 子菜单
  children?: MenuInfo[];
}