import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/Userslice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import onlineUserReducer from '../slice/OnlineUserSlice'
import sagaReducer from '../saga/userSlice'

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';

const rootReducer = combineReducers({
  user: userReducer,
  onlineUsers:onlineUserReducer,
  sagaUser:sagaReducer
});

//saga middleware
const sagaMiddleWare = createSagaMiddleware()

//using aysnc storage to sotre data in persistant storage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Fix: Use `storage` key
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const mystore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false,thunk:false }).concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga)

const persistedStore = persistStore(mystore); // Fix: Correct spelling

export { mystore, persistedStore };
