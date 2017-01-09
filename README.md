# React Project Step Up

------------------

A devlopment stack that I using to lean how to build front-end app with node.js.These are the dependencies:

- [react] (https://github.com/facebook/react) 
- [react-dom] (https://www.npmjs.com/package/react-dom)
- [antd] (https://ant.design/) 

Devlopment dependencies are listde in `package.json`.The steps to build this project are as follows:

1.Webapck

```shell
npm install --save-dev webpack
```

2.Babel to support es2015

```shell
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

3.React

```shell
npm install --save react react-dom
```

4.CSS & LESS

```shell
npm install --save-dev style-loader css-loader
```

```
npm install --save-dev postcss-loader autoprefixer
```

5.Hot load

HtmlWebpackPlugin

```shell
npm install --save-dev html-webpack-plugin
```

react-transform-hmr

```shell
npm install --save-dev babel-plugin-react-transform react-transform-hmr
```

The project is already configured.If you want to know how to configure the project, just read [this article] (http://blog.csdn.net/kun5706947/article/details/52596766).