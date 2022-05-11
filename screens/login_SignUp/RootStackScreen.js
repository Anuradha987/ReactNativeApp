import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';
import Login from './Login'
import Otp from './Otp';
import PasswordRecovery from './PasswordRecovery';
import ResetPassword from './ResetPassword';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation},props) => (
    <RootStack.Navigator headerMode='none'>
    <RootStack.Screen name="Login" loginState={props.loginState} component={Login}/>
        <RootStack.Screen name="Register" component={Register}/>
        <RootStack.Screen name="PasswordRecovery" component={PasswordRecovery}/>
        <RootStack.Screen name="Otp" component={Otp}/>
        <RootStack.Screen name="ResetPassword" component={ResetPassword}/>
    </RootStack.Navigator>
);

export default RootStackScreen;