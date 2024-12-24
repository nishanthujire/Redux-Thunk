import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { mystore, persistedStore } from './src/redux/store/mystore'; // Fix: Correct import names
import Routes from './src/navigation/Route';

const App = () => {
  return (
    <Provider store={mystore}>
      <PersistGate persistor={persistedStore}>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
