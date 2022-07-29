#### Steps

1. Install 'redux' library
2. Create 'Redux' folder
   a. Create action.js file
   b. Create reducer.js file
   c. Create store.js file
3. Setup store.js
4. Setup reducer.js
   Pure function

- It must be predictable
  When we give same number/types of arguente, we get the same output
- It should not have any side effects.
- It should not perform any operation that is not related requier for gerring the output

5. Install 'react-redux' library

- React Redux
  - <Provider store={store} >
  - useSelector()
  - useDispatch()

6. Install 'axios' and 'json-server' - `npm i json-server axion`
7. Write a script for running json-server at port 8080, in package.json file "server":"json-server --watch db.json --port 8080"
8. Run `npm run server`
// localStorage -->persist
// combineReducers
// Redux DevTools
// compose, middlewares,
1. Move the action.js actionTypes.js and reducer.js files inside AppReducer, inside Redux folder
2. Create AuthReducer folder, and action.js actionTypes.js and reducer.js files in AuthReducer
3. Correct import  where required
4. create rootReducer in store.js and pass AppReducer and AuthReducer in combineReducer
5. pass rootReducer in store.