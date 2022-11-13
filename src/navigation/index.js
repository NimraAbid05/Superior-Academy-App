import React from 'react'
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import DashBoardScreen from '../screens/DashBoardScreen';
import SplashScreen from '../screens/SplashScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import UserDataScreen from '../screens/UserdataScreen';
import CourseScreen from '../screens/CourseScreen';
import TodoScreen from '../screens/TodoScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';


const Stack = createNativeStackNavigator();

          const Navigation =()=>{
            return(
        <NavigationContainer>
            <Stack.Navigator initialRoute="SplashScreen" screenOptions={{
    headerShown: false
  }} >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="DashBoard" component={DashBoardScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Course" component={CourseScreen} />
                <Stack.Screen name="Contact" component={ContactScreen} />
                <Stack.Screen name="UserData" component={UserDataScreen} />
                <Stack.Screen name="Todo" component={TodoScreen}/>
                <Stack.Screen name="CourseDetail" component={CourseDetailScreen}/>
               
             
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
export default Navigation;