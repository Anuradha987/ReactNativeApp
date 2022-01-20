import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import CustomDrawer from './navigation/CustomDrawer';
import { createStackNavigator } from '@react-navigation/stack'
import {createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk;'
import rootReducer from "./stores/rootReducer";
import ReduxThunk from 'redux-thunk'

const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
  );

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
            <StatusBar barStyle="light-content" />
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Notice Board'}
                >
                    <Stack.Screen
                        name="Notice Board"
                        component={CustomDrawer}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App