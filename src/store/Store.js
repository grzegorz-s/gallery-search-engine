import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/index';

const loadState = function() {
  const localState = localStorage.getItem('localState');
  return localState ? JSON.parse(localState) : undefined;
}

const saveState = function(state) {
  const stringifiedState = JSON.stringify(state);
  localStorage.setItem('localState', stringifiedState);
}

const gallery = {
  data : {
    'cats' : {
      isFetching : false,
      tag : 'cats',
      images : []
    },
    'car' : {
      isFetching : false,
      tag : 'car',
      images : []
    }
  }
};

const defaultState = loadState() || { gallery };

export const history = createHistory();
export const store = createStore(rootReducer, defaultState, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  saveState({
    gallery: store.getState().gallery
  });
});
