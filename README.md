# angular-react-webpack-template
Simple SPA(single page application) using [angular.js 1.x](https://angularjs.org/), [ngReact](https://github.com/ngReact/ngReact) and [webpack2](https://webpack.js.org/configuration/).

Check source code [here](https://github.com/hankchiutw/angular-webpack-demo).

### Folder structure
```sh
.
├── docs            # root path of dev server
│   ├── img
│   ├── view
│   │   └── ...     # page templates
│   ├── bundle.js   # built bundle file
│   ├── vendors.js  # built bundle file of vendors libraries
│   ├── style.css   # built css bundle file
│   ├── favicon.ico
│   └── index.html
├── package.json
├── README.md       # this file
├── src
│   └── public
│       ├── js      # pre-built js files
│       └── style   # pre-built style files
├── webpack.config.js
└── yarn.lock
```

### Features
- Pure front-end code
- [angular-ui-router](https://github.com/angular-ui/ui-router)
- Responsive(mobile devices ready)
- babel-loader, i.e. ES6 syntax ready.
- React JSX
- [showdown](https://github.com/showdownjs/showdown) markdown parser.
- Skeleton angular factory, service and react component
- Messaging system
- Uglified and minimized bundle.js

### Install

```sh
yarn install
# or
npm install
```

### Development

Start local development environment:
```sh
npm start
```
Then browse http://localhost:8080

### ToDo
- Bundle `img` and `view`
- OAuth2 login(ex. google API, facebook API)
- Page showcases
