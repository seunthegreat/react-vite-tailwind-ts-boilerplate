# React Boilerplate with Vite and Tailwind CSS

This is a boilerplate for a React application that uses Vite as the build tool and Tailwind CSS as the CSS framework. The application is written in TypeScript.

## Getting Started

To get started with this boilerplate, you can clone this repository and install the dependencies:

```javascript
git clone seunthegreat/react-vite-tailwind-ts-boilerplate
cd react-boilerplate
npm install
```

Once the dependencies are installed, you can start the development server:

```javascript
npm run dev
```
This will start the development server at http://localhost:3000.

## Important Note

Ensure you replace the git origin to yours. To do so, 

* Open your terminal or command prompt and navigate to the local repository where the origin is located.

* Type the following command, replacing <remote-name> with the name of the origin you want to remove:

```javascript
git remote remove origin
```
* Verify that the origin was removed by running the following command: 
```javascript
git remote -v 
```
* Add your git remote url 
```javascript 
git remote add <remote-name>
```

```javascript
To build the application for production, you can run:
npm run build
```
This will create an optimized build in the dist directory.

## Additional Configurations 
This boilerplate is configured with React Router and ESLint. You can configure these tools further by modifying the vite.config.js and .eslintrc.json files.


## Available Scripts

In the project directory, you can run:

`npm run dev`
Runs the app in the development mode.

`npm run build`
Builds the app for production to the dist folder.

`npm run serve`
Serves the production build from the dist folder.

`npm run lint`
Lints the code using ESLint.

`npm run format`
Formats the code using Prettier.