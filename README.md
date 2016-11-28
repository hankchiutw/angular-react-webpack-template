# angular-webpack-demo
Simple SPA(single page application) using [angular.js 1.x](https://angularjs.org/) and [webpack](http://webpack.github.io/docs/).

### Folder structure
```sh
.
├── dist            # root path of dev server
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
- [angular-ui-router](https://github.com/angular-ui/ui-router)
- Responsive(mobile devices ready)
- babel-loader, i.e. ES6 syntax ready.
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
