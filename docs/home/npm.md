# 发布npm包

## 关于

## 初始化
初始化一个最基本的项目，选用经常使用的工具即可，**yarn**，**pnpm**，**npm**等等
```js
npm init -y || yarn init // 直接完成，跳过配置
```
* 基本配置文件结构 **package.json**
```json{2-7,9-14}
{
  "name": "npm-cs", // 包的名称
  "version": "1.0.0", // 包的版本
  "description": "", // 报的描述
  "main": "index.js", // 设置了应用程序的入口点
  "author": "lrsoy <邮箱>", // 包的作者
  "license": "ISC", // 认证
  /* 关于 github 仓库 */
  "homepage": "", // 软件包主页
  "repository": { // 此属性指定了此程序包仓库所在的位置
    "type": "git",
    "url": "git+https://github.com/lrsoy/parse-markdown-file.git"
  },
  "bugs": "issues", // 软件包的问题链接地址
  /* 关于包的入口文件 */
  "main": "./dist/index.mjs", // 设置软件包的入口点
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
}

```
* 目录结构  
[.gitignore自定义生成什么样的忽略文件](https://www.toptal.com/developers/gitignore)
```lua
hello-npm
|-- dist/（ 存放打包后的文件,无需设置，通过打包生成 ）
|-- src/（ 源码 ）
|-- test/ ( 测试文件 )
|-- package.json
|-- build.config.ts ( unbuild打包配置文件 )
|-- .npmrc ( 配置npm源 )
|-- .gitignore ( 忽略文件配置 )
|-- README.md
|-- tsconfig.json (如果可以，推荐使用ts进行包的开发，如不需要ts则无需此配置文件)
```

## 配置文件

## Degit工具 

## 支持多种方式下载

## 打包选择

## 账号登录 :writing_hand:

要想发布自己开发好的包，最重要的就是需要注册一个npm的账号。  
[npm](https://www.npmjs.com/signup)。  
[npm 指令](https://docs.npmjs.com/cli/v8/commands)

![vscode](https://img.shields.io/badge/vscode-v1.56.2-blue)  
![nodejs](https://img.shields.io/badge/nodejs-v16.17.0-blue)  
![npm](https://img.shields.io/badge/npm-v8.15.0-blue)  

1. 指定服务器
```js
npm adduser
```
2. 登录，输入指令 **npm login** 后提示一下信息，根据以下选项进行填写。
```js
// 使用的是你的 npm 的用户名
Username: 用户名 

 // 使用的是你的 npm 登录秘密
Password: 密码

// 填写邮箱信息，填写后 npm 会向你发送邮件，复制邮件的验证码，填到下面选项里
Email: (this IS public): 邮箱 

// 填写邮箱中接收到的 8位验证码 例如：60175662
Enter one-time password: 验证码
```
3. 退出当前登录账号
```js
npm logout
```
4. 查看当前登录者
```js
npm who am i
```
5. 将开发完成的包推送到npm服务器上
```js
npm publish
```
