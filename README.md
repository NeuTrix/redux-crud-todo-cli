# MERN-CRUD project: redux_crud_todolist 
This is a basic CRUD application deployed on the MERN stack (Mongo, Express, React, and Nodejs).  The project is a decoupled architecture with <a href="https://github.com/NeuTrix/redux-todo-api" target="_blank" > the API repo</a> and its <a href="https://documenter.getpostman.com/view/2246102/collection/RVnb9GaY" target="blank" >  the API docmentation </a> in these links.

## Project features

- a responsive web design utilizing React, Redux, and Bootstrap
- Redux immutable state architecture with logger
- Decoupled architecture with asynchronus CRUD actions 
- Secure user accounts with validation, JWT, and use of ENV variables
- TDD approach with Jest, Enzyme, Chai
- Data persistence via mlab.com
- Deployment via Heroku (client and api)

#Deployment on Heroku
- [The Client](https://redux-crud-project.herokuapp.com)
- [API documentation](https://documenter.getpostman.com/view/2246102/collection/RVnb9GaY)

## Installation
- run the app `npm start`
- run the tests `npm t` or `npm test`

## Application:

Frontend
- CSS (Bootstrap)
- ReactJS
- Redux
- React Router

Database
- Mongo
- Mongoose 

## Testing Error
After intial `yarn`, this error appears:
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
