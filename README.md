# MERN-CRUD project: 
This is a basic CRUD application deployed on the MERN stack (Mongo, Express, React, and Nodejs).  The project is a decoupled architecture with <a href="https://github.com/NeuTrix/redux-todo-api" target="_blank" > the API repo</a> and its <a href="https://documenter.getpostman.com/view/2246102/collection/RVnb9GaY" target="blank" >  the API docmentation </a> in these links.

## Project features

- Decoupled architecture with asynchronus CRUD actions
- TDD approach with Jest, Enzyme, Chai
- Deployment via Heroku (client and api)

*frontend*
- Responsive web design utilizing React, Redux, and Bootstrap
- Redux immutable state architecture with logger

*backend*
- Secure user accounts with validation, JWT, and use of ENV variables
- Data persistence via mlab.com

## Deployment 
Application deployed on Heroku:

- [The Client](https://redux-crud-project.herokuapp.com) -or-
https://redux-crud-project.herokuapp.com
- [API documentation](https://documenter.getpostman.com/view/2246102/collection/RVnb9GaY) -or- https://documenter.getpostman.com/view/2246102/collection/RVnb9GaY

## Installation

- run `yarn` or `npm install`
- run the app `npm start`.  Client server will spin up on `http:\localhost:3000`
- run the tests `npm t` or `npm test`

## Application:

Frontend
- CSS (Bootstrap-responsive design)
- ReactJS (front end view)
- Redux (appllication state management)
- React Router (cli side routing)
- axios (ajax calls)

Backend
- Express
- Mongo
- Mongoose 

## Note: Testing Error

After running intial `yarn` or `npm install`, this error appears:
`TypeError: environment.teardown is not a function`

Need to go to the offending "environment" lines in the file and comment them out.

```javascript
// line 112...
const start = Date.now();
    // yield environment.setup();
    try {

// line 144...
 } finally {
      // yield environment.teardown();
    }
```
