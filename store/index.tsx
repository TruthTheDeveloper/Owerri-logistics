import {createStore} from 'redux';

import inputReducers from '../store/reducers/inputReducers';

const store = createStore(inputReducers)

export default store