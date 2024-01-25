# M8W21 Concluding React


## To Do:

[x] Build a Simple App

## Running this Example

Open a terminal window:

```BASH
cd ./back-end            # Enter the back-end folder
npm install              # Install dependencies
npm start # Start the Express server
```

Open a **second** terminal window:

```BASH
cd ./front-end # Enter the front-end folder
npm install    # Install dependencies
npm start      # Start the React development server
```

### To-Do App

* Back-End (Express)
    * API - JSON
* Front-End (React)

## Data

```js
const toDos = [
    {
        id: 'jfsdkljfdklsflsdlflsd' // uniqid()
        task: 'Buy Milk',
        completed: true // || false
    },
    {
        id: 'sdfdsfdsfdfdsfffsdfsd' // uniqid()
        task: 'Study React',
        completed: false
    }
];
```

## API Endpoints

Index, Delete, Edit

* Index:  `GET /api/todos` (Show all to-dos.)
* Delete: `DELETE /api/todos/:id` (Delete single to-do.)
* Edit: `POST /api/todos/:id/complete` (Edit single to-do completion status.)

### React Planning

Components:
* ToDoItem

## Resources

* [Add React in One Minute](https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)
  * [Try JSX](https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx)
* [JavaScript XML (JSX)](https://reactjs.org/docs/introducing-jsx.html)
* [Babel](https://babeljs.io/)
* [JavaScript ES6 Module Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [Creating a Production Build](https://create-react-app.dev/docs/production-build)
* [React "StrictMode"](https://reactjs.org/docs/strict-mode.html)
* [Components and Props](https://reactjs.org/docs/components-and-props.html)
* [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
* [Forms in React](https://reactjs.org/docs/forms.html)
* [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Robots.txt](https://www.robotstxt.org/robotstxt.html)
* [Favicon.ico & App Icon Generator](https://www.favicon-generator.org/)
* [Oreilly's Learning React, 2nd Edition](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)