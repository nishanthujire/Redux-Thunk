import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import onlineUserReducer from '../slice/OnlineUserSlice';

const rootReducer = combineReducers({
  onlineUsers:onlineUserReducer,
});


//using aysnc storage to sotre data in persistant storage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const mystore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});


const persistedStore = persistStore(mystore); 

export { mystore, persistedStore };
