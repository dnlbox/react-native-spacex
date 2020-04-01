/**
 * SpaceX React Native App
 */

import React from 'react';
import { Provider } from 'react-redux';
import LaunchesSceneComponent from './scenes/launches/launches.component';
import { configureStore } from './store';
import { loadLaunches } from './common/launches';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RocketSceneComponent from './scenes/rocket/rocket.component';

// Hermes is enabled, see file android/app/build.gradle
declare var global: { HermesInternal: null | {} };

const store = configureStore();

/**
 * In case of bootstrap has more things to do, this will be moved to their own context
 */
const bootstrap = () => {
  store.dispatch(loadLaunches());
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Launches" component={LaunchesSceneComponent} />
          <Stack.Screen
            name="Rocket"
            component={RocketSceneComponent}
            options={{ title: 'Rocket Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

bootstrap();

export default App;
