import {createStore, applyMiddleware} from 'redux';

import inputReducers from './reducers/inputReducers';
import {createWrapper} from 'next-redux-wrapper';



export const store = createStore(inputReducers)
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
