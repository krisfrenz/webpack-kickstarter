# webpack-kickstarter

Kickstart your web project with a fresh breeze of awesomeness.

# What is this repo about?

* Showcase for Sass compilation with [webpack](http://webpack.github.io/).
* Sass folder structure is based on [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss).
* Write JavaScript in ES6 syntax (both in source files and in test files). Code gets transpiled to ES5.
* Bonus: [ESLint](http://eslint.org/), [Autoprefixer](https://github.com/postcss/autoprefixer) and some helpful `npm` commands are included.

# How to start?

Install dependencies:

```
npm install
```

Now you can use the following `npm` commands:

* `npm run build`: Outputs the final JS and CSS file once. Code is minified and without source maps (production-ready).
* `npm run build-dev`: Same as `npm run build`, but unminified and with source maps.
* `npm run watch`: Constantly watches changes to JS and SCSS files and compiles them. Code is unminified and with source maps.
* `npm run test`: Runs JS tests in your shell.
* `npm run test-debug`: Runs JS tests by opening up Chrome. Debug tests by adding breakpoints in den dev tools.
