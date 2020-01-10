// 向外保留UserInfo 数据类型

export interface UserInfo {
    // 唯一ID
    id: string;
    // 用户名
    userName: string;
    // 密码
    passWord: string;
    // 姓名
    name?: string;
    // 邮箱
    email?: string;
    // 头像
    avatar?: string;
    // 角色集合
    roleName?: string;
    // 组织集合
    organizeName?: string;
}