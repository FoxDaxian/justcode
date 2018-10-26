### 非window系统生成一个可以用来写框架的模板的脚手架工具

1. 支持es6
1. 支持scss
1. 热刷新(除index.html)
1. 自动打开默认浏览器
1. 开发环境写入内存


#### 用法

```js
	//  全局安装
	npm i justcode -g
	// 切换到你的目标目录
	cd /yourcustom dir
	// 生成模板
	jcd init <customName>
	cd customName
	// 安装依赖
	npm i
	// 开发环境
	npm run dev
	// 打包
	npm run build
```