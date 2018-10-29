### window | mac | linux 生成一个可以用来写框架的模板的脚手架工具

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
	// 打包后请更新package.json部分字段，下面为package.json，json不支持 '//' 格式的注释，以下为了方便，故添加注释
	{
		"name": "plugin_name", // 你的插件名称
		"version": "1.0.0", // 版本号，每次更新后手动更新，或者使用standard-version管理，附上地址： https://github.com/conventional-changelog/standard-version
		"main": "./dist/output.js", // 默认的打包输出路径，config目录下有默认配置，需同步修改
		"repository": "your git repository", // 该插件对应的github地址
		"author": "your name", // 你的大名
		"license": "MIT", // 协议
		"scripts": {
			"dev": "cross-env DEBUG=console.* babel-node ./build/webpack.dev.js",
			"build": "cross-env DEBUG=console.* babel-node ./build/webpack.prod.js"
		},
		"dependencies": {},
		"devDependencies": {}
	}
	// 最后一步，登录npm
	npm login
	// 发布，发布的时候不能使用非npm源，并且需要更新版本，否则会发布失败
	npm publish
```

#### 以上为大概内容和流程，有任何问题可以提issue