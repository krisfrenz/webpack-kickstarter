# webpack-kickstarter

Kickstart your web project with a fresh breeze of awesomeness.

# What is this repo about?

* Showcase for Sass compilation with [webpack](http://webpack.github.io/).
* Write JavaScript in **ES6 syntax** (both in source files *and* in test files). Code gets transpiled to ES5. I added a [hello world test example](https://github.com/isellsoap/webpack-kickstarter/blob/master/test/scripts/hello/index.spec.js) to get you started.
* Bonus: [ESLint](http://eslint.org/), [stylelint](http://stylelint.io/), [Autoprefixer](https://github.com/postcss/autoprefixer) and some helpful `npm` commands are included.

# How to start?

Install dependencies:

```
npm install
```

Now you can use one of the following `npm` commands:

* `npm run build`: Outputs the final JS and CSS file once. Code is minified and without source maps (production-ready).
* `npm run build-dev`: Same as `npm run build`, but unminified and with source maps.
* `npm run packages-check`: Checks if there are new versions of the npm packages listed in your `package.json`.
* `npm run packages-update`: Same as `npm run packages-check`, but updates the `package.json` with the latest versions of your dependencies.
* `npm run test`: Runs JS tests in your shell.
* `npm run test-debug`: Runs JS tests by opening up Chrome. Debug tests by adding breakpoints in Chrome dev tools.
* `npm run watch`: Constantly watches changes to JS and SCSS files and compiles them. Code is unminified and with source maps.

# That’s it?

Jup, that’s it. Turn that watcher on, write in ES6 syntax, lint your JavaScript and SCSS files, autoprefix your SCSS code, be awesome.
