# angular-webpack-demo
Simple SPA(single page application) using [angular.js 1.x](https://angularjs.org/), [ngReact](https://github.com/ngReact/ngReact) and [webpack](http://webpack.github.io/docs/).

Source code [here](https://github.com/hankchiutw/angular-webpack-demo).

### Folder structure
```sh
.
├── docs            # root path of dev server
│   ├── css
│   ├── img
│   ├── view
│   ├── bundle.js   # built bundle file
│   ├── favicon.ico
│   └── index.html
├── package.json
├── README.md       # this file
├── src
│   └── public
│       └── js      # pre-built js files
└── webpack.config.js
```

### Features
- Pure front-end code
- [angular-ui-router](https://github.com/angular-ui/ui-router)
- Responsive(mobile devices ready)
- babel-loader, i.e. ES6 syntax ready.
- React JSX
- [showdown](https://github.com/showdownjs/showdown) markdown parser.
- Uglified and minimized bundle.js

### Pre-install

```sh
npm install -g webpack webpack-dev-server
```

### Install

```sh
npm install
```

### Development

```sh
npm start # local dev environment
```
Browse http://localhost:8080

### ToDo
- Bundle `css`, `img` and `view`
- OAuth2 login(ex. google API, facebook API)
- Page showcases
