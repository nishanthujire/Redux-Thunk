import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/Userslice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Fix: Use `storage` key
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const mystore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistedStore = persistStore(mystore); // Fix: Correct spelling

export { mystore, persistedStore };
