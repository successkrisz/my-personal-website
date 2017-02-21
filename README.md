# My personal website

I started developing this site using React and Redux to practice and improve my skills.
How it works:

* It's loading the content from an API.
* Storing the content in a Redux store than render it to the components.
* The Github Widget receives it's content through the Github API.

## Used tech

* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [express](https://github.com/expressjs/express)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)
* [redux-form](http://redux-form.com)

## Requirements
* node `^4.5.0`
* yarn `^0.17.0` or npm `^3.0.0`

## Getting Started

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/successkrisz/my-personal-website.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic installs, but `npm install` will work just as well.

```bash
$ yarn install    # Install project dependencies
$ yarn start      # Compile and launch (same as `npm start`)
```
If everything works, you should see the following:

<img src="http://i.imgur.com/Kk2qTHC.png" />

Available scripts:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Thank you

* [David Zukowski](http://zuko.me) for creating the [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) which I'm using as a build setup for this project.
