# MERN-CRUD project: 
This is a basic CRUD application deployed on the MERN stack (Mongo, Express, React, and Nodejs).  The project represents a decoupled architecture with the [Client Application here](https://react-todo-walker.herokuapp.com/), the [API docmentation here](https://documenter.getpostman.com/view/2246102/collection/RVnb9GaY), and the [API GitHub repo here](https://github.com/NeuTrix/redux-todo-api)

<img width="300" alt="screen shot 2018-03-28 at 5 11 37 pm" src="https://user-images.githubusercontent.com/8140653/38062947-8c760652-32ab-11e8-92bf-b03d5dbba989.png"> <img width="150" alt="screen shot 2018-03-28 at 5 11 53 pm" src="https://user-images.githubusercontent.com/8140653/38062918-62830a3e-32ab-11e8-9a23-87c2cd010701.png"> <img width="150" alt="screen shot 2018-03-28 at 5 10 48 pm" src="https://user-images.githubusercontent.com/8140653/38062950-91d43e48-32ab-11e8-8fbb-f4d7af4fe489.png"> <img width="150" alt="screen shot 2018-03-28 at 5 10 38 pm" src="https://user-images.githubusercontent.com/8140653/38062951-95cdb164-32ab-11e8-9287-a99686c3f013.png">

## Project features

- MERN Stack 
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

- [The Client](https://react-todo-walker.herokuapp.com/) -or-
https://react-todo-walker.herokuapp.com/
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
