import { combineReducers } from 'redux'; 
import { routerReducer } from 'react-router-redux';

import gallery from './galleries';

const rootReducer = combineReducers({
  gallery,
  router: routerReducer
});

export default rootReducer;