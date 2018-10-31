### A scaffold that generates template tools for writing NPM packages. compatible with window & mac & linux.

[中文](https://github.com/FoxDaxian/justcode/blob/master/README.md '中文地址') | [english](https://github.com/FoxDaxian/justcode/blob/master/en-us.md 'en-us')

#### template basic function
1. support es6
1. support scss
1. hot refresh (except index.html)
1. auto open default browser
1. write memory in dev


#### usage

```js
	//  global install
	npm i justcode -g
	// switch yourt target dir
	cd /yourtarget dir
	// init
	jcd init <customName>
	// cd
	cd customName
	// installation dependence
	npm i
	// in dev environment
	npm run dev
	// to package
	npm run build
	// package.json part
	{
		"name": "plugin_name", // your NPM package name
		"version": "1.0.0", // version，you can use standard-version to automatic management
		"main": "./dist/output.js", // default output path，you can config in config directory
		"repository": "your git repository",
		"author": "your name",
		"license": "MIT",
		"scripts": {
			"dev": "cross-env DEBUG=console.* babel-node ./build/webpack.dev.js",
			"build": "cross-env DEBUG=console.* babel-node ./build/webpack.prod.js"
		},
		"dependencies": {},
		"devDependencies": {}
	}
	// login
	npm login
	// publish
	npm publish
```

#### the above is about the content and process. if you have any questions, you can mention issue.