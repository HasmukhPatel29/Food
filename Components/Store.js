import { createStore } from 'redux';
import reducers from './CartReducers';
import { persistStore , persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig ={
  key: 'root',
  storage:AsyncStorage
}
const persistedReducer = persistReducer(persistConfig,reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor}