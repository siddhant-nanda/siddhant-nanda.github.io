# My PortFolio Website

You can visit my website [here](https://siddhant-nanda.github.io)

## You can follow these steps to create your own portfolio website

### Setup the app

- Install Node

- Run `node -v and npm -v` to check if node is properly installed with latest version.

- Run `npx create-react-app <app_name>` to create a bootstrap ReactJs project.

- You can go ahead and add your files and images in the project structure.

- For reference, you can go through [Official Docs](https://reactjs.org/docs/getting-started.html) of ReactJs.

### Explore the app

- Run `yarn install` or `npm install` to install all the dependencies mentioned in *package.json* file.

- Run `yarn start` or `npm start` to start the app in the development mode.

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- The page will reload if you make edits. You will also see any lint errors in the console.

- Run `yarn test` to launch the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- Run `yarn build` to build the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Some checkpoints for portfolio website

- The name of the repository should be in this format `<github-username>.github.io`.

- When we add ReactJs project directly into the main or master branch of the repo,
GitHub only works on `index.html` file for hosting GitHub pages.

- To make our React App work for portfolio website we have to use a package named `gh-pages`.

### Final steps for GitHub Portfolio page - [Reference](https://www.pluralsight.com/guides/fix-create-react-app-showing-readme.md)

- If you don't use `index.html`, the webiste will always show README.md page.

- Run `npm install -g gh-pages --save-dev` to install `gh-pages`.

- Run `gh-pages -b <branch_name> -d build` to create build for the page.

*Voila!! Your page is ready and you can check your website now.*

*`Portfolio Website will be https://<github-username>.github.io`*

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
