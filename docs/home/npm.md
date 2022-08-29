# 发布npm包

## 关于


## 账号登录 :writing_hand:

要想发布自己开发好的包，最重要的就是需要注册一个npm的账号，[npm](https://www.npmjs.com/signup)。

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
3. 推出当前登录账号
```js
npm logout
```