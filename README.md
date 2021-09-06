## 简介

[template](http://10.212.172.155:8001/yangmeili/template.git) 是一个前端模板文件，它基于 [vue](https://github.com/vuejs/vue) 和 [vant](https://youzan.github.io/vant/#/zh-CN/)实现。它使用了最新的前端技术栈，内置了vueRouter，vuex, axios，cordova,提供了常用的基础插件，它可以帮助你快速搭建ICE APP 功能模块产品原型。希望本项目都帮助到你。

**目前版本为基于 `vue-cli4` 进行构建.

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[cordova](https://cordova.axuer.com/)、[axios](https://github.com/axios/axios) 和 [vant](https://youzan.github.io/vant/#/zh-CN/)所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助.

## 功能

```

- 多环境发布
  - dev test prod

- 全局功能
  - 本地/后端 mock 数据
  - API 模块化统一管理、防止二次请求、Token配置、拦截器配置 
```

## 开发

```bash
# 克隆项目
git clone http://10.212.172.155:8001/yangmeili/template.git

# 进入项目目录
cd template

# 安装依赖
yarn

# 建议使用yarn, 有关yarn的安装可以参考 [yarn官网](https://yarn.bootcss.com/), 或使用命令安装
npm install yarn 

# 启动服务
yarn serve
```

浏览器访问 http://localhost:8080

## 发布

```bash
# 构建测试环境
yarn test

# 构建生产环境
yarn build
```

## 其它

```bash

# 代码格式检查
yarn lint

# 代码格式检查并自动修复
yarn lint --fix
```
