# node.js-
node小mode

目录结构
.
app.js	项目的入口文件
controllers
models	存储使用mongoose设计的数据模型
node_modules	第三方包
package.json	包描述文件
package-lock.json	第三方包版本锁定文件（npm5之后才有）
public	公共静态资源
routes
views	存储视图目录

## 路由设计

| 路由            | 方法 | get参数 | post参数                | 是否需要登录 | 备注         |
| --------------- | ---- | ------- | ----------------------- | ------------ | ------------ |
| /               | get  |         |                         |              | 渲染首页     |
| /register(登录) | get  |         |                         |              | 渲染注册页面 |
| /register       | post |         | email,nickname,password |              | 处理注册请求 |
| /login          | get  |         |                         |              | 渲染登陆界面 |
| /login          | post |         | email,password          |              | 处理登录请求 |
| /loginout       | get  |         |                         |              | 处理退出请求 |

## 步骤

- 创建目录结构
- 整合静态也-模板页
  - include
  - block
  - extend
- 设计用户登陆，退出，注册的路由
- 用户注册
  - 先处理客户端页面的内容（表单控件的name，收集表单数据，发起请求）
  - 服务端
    - 获取从客户端收到的数据
    - 操作数据库
      - 如果有错，发送500告诉客户端服务器错了‘
      - 其他的根据业务发送不同的响应数据
- 登录
- 退出

## 依赖
>  "dependencies": {
>     "art-template": "^4.12.2",
>     "blueimp-md5": "^2.10.0",
>     "body-parser": "^1.18.2",
>     "bootstrap": "^3.3.7",
>     "express": "^4.16.2",
>     "express-art-template": "^1.0.0",
>     "express-session": "^1.15.6",
>     "jquery": "^3.2.1",
>     "mongoose": "^4.13.0"
>   }
> }
