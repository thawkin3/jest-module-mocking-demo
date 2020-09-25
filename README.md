# Jest Module Mocking Demo

This project is meant to show how module mocking works in Jest with default exports and named exports using ES6 modules.

## Running This Project Locally

1. Clone the repo
2. `yarn install`
3. `yarn test` (or `yarn test --watch` to run in watch mode)

## Directory Structure

There are three main directories inside the `src` directory, each to test out different export types:

1. Named exports
2. Default export
3. Default export and named exports

Within each of these directories, there is one source code file called `utils.js`. The rest of the files are examples for various module mocking needs during testing:

1. Unmocked
2. Automatically mocked
3. Mocked using the module factory method
4. Mocked using the module factory method and mock implementations
5. Partially mocked

Not covered in this project is mocking using a `__mocks__` directory.

## How This Project Was Bootstrapped

This project was bootstrapped by using the following steps. To avoid confusion, these are not the steps to use this repo. Those can be found above in the "Running This Project Locally" section. The steps below are what you would follow if you'd like to create a similar project from scratch:

Create and initialize a new directory and project

1. `mkdir jest-module-mocking-demo`
2. `cd jest-module-mocking-demo`
3. `npm init` (follow CLI prompts)

Follow the steps in the [Jest - Getting Started Guide](https://jestjs.io/docs/en/getting-started.html)

4. `yarn add --dev jest`
5. `npx jest --init` (follow CLI prompts)
6. `yarn add --dev babel-jest @babel/core @babel/preset-env`
7. Create a `babel.config.js` file with these contents:
```
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
}
```

At this point, you can start creating source files and test files.
