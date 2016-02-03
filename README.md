This repo is a boilerplate for React-Babel-Gulp project. You could use it as a base to build your own web app.

##Features

- Equip with React 0.14, ES6 & Babel 6
- Lint with ESlint
- Build with Gulp & browserify
- Support [hot module replacement]
- Auto Open a new browser tab when watchify loads, and reload the page when you modified the code

## How to use

First, you should clone the repo and install the dependencies.

```bash
$ git clone git@github.com:mrdream24/react-babel-gulp-boilerplate.git <yourAppName>
$ cd <yourAppName>
$ npm install
```

Then, launch the boilerplate app.

```bash
$ gulp watch
```

You should see a new browser tap opening and a title of "Hello World" in http://localhost:3000.

From there, you start to develop your own code in the `src` directory. When you finish coding, use `gulp build` or `gulp deploy` to build the static files.

## License

MIT

