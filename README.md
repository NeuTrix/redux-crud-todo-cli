# redux_crud_todolist (WIP)
Basic CRUD todo application in React with Redux

## Project Background

This is a React and Redux application with immutable state and
asynchronus CRUD actions for Todo list application.

- Standalone CRUD frontend app utilizing ReactJS / Redux framework
- TDD approach
- Support with datapersistence via localStorage
- Deployment via Heroku

## The stack

- ReactJS
- Redux
- React Router
- BootStrap
- Mongo/Mongoose db set up on mlab cloud

## Testing Error
After intial `yarn`, this error appears:
`TypeError: environment.teardown is not a function`

Need to go to the offending lines (112 and 144
) and comment the out.

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

# Application:

- React front end
- Redux for state management
- Bootstrap CSS
- CRUD actions for Todo list (Create, Read, Update, Delete)
- Data persists in localStorage
- Deployed on Heroku: https://redux-crud-project.herokuapp.com/

- Debugging Mongoose and testing suit in alt branch

## Web resources
- tutorial at: https://coursework.vschool.io/mongoose-crud/
- Testing resource: https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

## Testing


# UI Optimization
### Chrome
- iPhone X