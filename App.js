import React, { useEffect } from 'react';
import { View, Text, StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './navigation/CustomDrawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk;'
import rootReducer from './stores/rootReducer';
import ReduxThunk from 'redux-thunk';
import {
  SSentDetailsAfterAccepting,
  ViewItems,
  SAfterApproved,
  SAfterCompleted,
  S_RequestsDetails,
  Notification,
  MyProfile,
  NewReqForm,
  UserProfile,
  Login,
  Register,
  Otp,
  PasswordRecovery,
  ResetPassword,
  AddNewCard,
  PaymentCards,
  Categories,
  AddEditItems,
  ImageBrowserScreen
} from './screens/index';
import { AuthContext } from './components/context';
import RootStackScreen from './screens/login_SignUp/RootStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  // const[isLoading, setIsLoading] = React.useState(true);
  // const[userToken, setUserToken] = React.useState(null);


  // ---------------handling user login-------------------   //
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      //sign in
      login: async (foundUser) => {
        const userToken = String(foundUser.userToken);
        const userName = foundUser.username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({ type: 'LOGIN', id: userName, token: userToken });
      },

      //signup
      register: () => {
        // setUserToken('swef')
        // setIsLoading(false);
      },

      //signout
      logout: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' });
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);
  // ---------------end of handling user login------------------- //


  // loading page
  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 4,
          backgroundColor: 'rgba(21,31,40,1)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* https://github.com/n4kz/react-native-indicators */}
        <ActivityIndicator size="large" />
      </View>
    );
  }


  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          {loginState.userToken !== null ? (
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              //  initialRouteName={'Notice Board'}
            >
              <Stack.Screen name="Notice Board" component={CustomDrawer} />
              <Stack.Screen name="ViewItems" component={ViewItems} />
              <Stack.Screen name="NewReqForm" component={NewReqForm} />
            {/*<Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Otp" component={Otp} />
              <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />*/}
              <Stack.Screen name="ResetPassword" component={ResetPassword} /> 
              <Stack.Screen name="AddNewCard" component={AddNewCard} />
              <Stack.Screen name="PaymentCards" component={PaymentCards} />
              <Stack.Screen name="MyProfile" component={MyProfile} />
              <Stack.Screen name="Notification" component={Notification} />
              <Stack.Screen name="UserProfile" component={UserProfile} />
              <Stack.Screen name="Categories" component={Categories} />
              <Stack.Screen name="SSentDetailsAfterAccepting" component={SSentDetailsAfterAccepting}/>
              <Stack.Screen name="S_RequestsDetails" component={S_RequestsDetails} />
              <Stack.Screen name="SAfterCompleted" component={SAfterCompleted} />
              <Stack.Screen name="SAfterApproved" component={SAfterApproved} />
              <Stack.Screen name="AddEditItems" component={AddEditItems} />
              <Stack.Screen name="ImageBrowserScreen" component={ImageBrowserScreen} />
            </Stack.Navigator>
          ) : ( 
           <RootStackScreen loginState={loginState}/>        //screens in the login_SIgnUp folder
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
