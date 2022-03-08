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
import {SSentDetailsAfterAccepting,ViewItems, SAfterApproved, SAfterCompleted, S_RequestsDetails, Notification, MyProfile, NewReqForm, UserProfile, Login, Register, Otp, PasswordRecovery, ResetPassword, AddNewCard, PaymentCards,Categories } from './screens/index';


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
                <Stack.Navigator screenOptions={{ headerShown: false }}
                                 initialRouteName={'Notice Board'}
                >
                    <Stack.Screen name="Notice Board" component={CustomDrawer} />
                    <Stack.Screen name="ViewItems" component={ViewItems} />
                    <Stack.Screen name="NewReqForm" component={NewReqForm} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Otp" component={Otp} />
                    <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} />
                    <Stack.Screen name="AddNewCard" component={AddNewCard} />
                    <Stack.Screen name="PaymentCards" component={PaymentCards} />
                    <Stack.Screen name="MyProfile" component={MyProfile} />
                    <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="UserProfile" component={UserProfile} />
                    <Stack.Screen name="Categories" component={Categories} />
                    <Stack.Screen name="SSentDetailsAfterAccepting" component={SSentDetailsAfterAccepting} />
                    <Stack.Screen name="S_RequestsDetails" component={S_RequestsDetails} />
                    <Stack.Screen name="SAfterCompleted" component={SAfterCompleted} />
                    <Stack.Screen name="SAfterApproved" component={SAfterApproved} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App