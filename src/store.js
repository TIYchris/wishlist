import { createStore } from 'redux';

// App Reducers
import itemsReducer from './reducers/items';

var store = createStore(itemsReducer);

export default store;