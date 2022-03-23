import {createStore, applyMiddleware} from 'redux';

import inputReducers from '../store/reducers/inputReducers';

console.log(inputReducers)

const store = createStore(inputReducers)
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export default store