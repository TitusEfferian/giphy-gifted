This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Node_modules were not included when submitted this project. Make sure to install all dependencies first.

### `npm install`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# React Component Overview

## HeaderSearch

this component handle input type and search click to search giphy result.

## Content

this component handle all result from giphy endpoint included trending, random and search result. I designed using `flexbox` css style, Left side will show all even results, right side will show all odd result.

## Card

this component handle all img source from giphy endpoint. At first load, this component only show `.jpg` images and if this component clicked, show `.gif` source.

## App

Root of the application starts here.

# Extra Works

## Image Lazyload

i used `lazysizes` from `https://web.dev/fast` for performance consistency.
it only load image that currently active on viewport.

## Infinite loading

i choose infinite loading instead of pagination, i also learning by doing how to used `Intersection Observer` when doing this project.
