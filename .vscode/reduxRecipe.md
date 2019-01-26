## Add yarn add npm packages
  - [ ] react
  - [ ] react-redux

## Connect the Provider (`/index.js file`)
- [ ] 
## set up the Store
## set up Helpers folder
- [ ] api/url helper
- [ ] Constants helper (ensure constants integrity)
## Set up Actions
 - [ ] `actions/movieActions.js` 
 - [ ] `actions/commentActions.js` 
 - [ ] `actions/userActions.js` 
## Set up Reducers
## Set up the logger?
  - requires middleware in the store

# How does this flow?
*Keep all of this in a `redux/` folder?*
- ACTION is called by a components
  - `/action/..` folder
  - e.g. make an api call 
  - each returns an Action object (type, payload)
    - individually exported functions
  - CONSTANTS used by action are drawn from a helper file
    - `/actions/typeConstants.js`, same folder level but could be in `/helpers`
  - API url drawn from helper file
    - `/helpers/apiHelper.js`
    - action functions up top, api functions at the bottom
      - require `axios`, `thunk`, `redux-promise` (in the store?)
- ACTION flows to the REDUCER
  - `/reducers/...` folder
  - only the reducer can (immutably) change the state object
  - reducer takes an `initialState` object and an action
  - can have one reducer for CRUD or specifi group of actions
  - map that name to an action file
- REDUCER files roll up to an index reducer file (combined)
  - `/reducers/index.js`
- REDUCER is passed to a STORE function(file)
- STORE is passed to a PROVIDER as an arg
  - `/store/...` folder
  - `<Provider store={store}>`
- PROVIDER is wrapped around the index.js top level application
- COMPONENT (container) is connected to the store
  - `import { connect } from 'react-redux'`
  - state and state.dispatch objects are mapped to the component
  - component exports the connected component
  - `export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);`
  - state and dispatch values passed to children as props
  - Rinse and Repeat (Action is called by a component)
  - ** a child component can also subscribeor connect to the store directly **
    - investigate this.  Reduce need for a connected component? Reduce nesting?


