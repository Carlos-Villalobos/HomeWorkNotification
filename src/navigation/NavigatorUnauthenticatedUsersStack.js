import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LogInScreen from '../screens/LogInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import TabAuthenticatedStack from './TabAuthenticatedStack'

const Stack = createStackNavigator()

class NavigatorUnauthenticatedUsersStack extends React.Component{
    render(){
        return(
            <Stack.Navigator initialRouteName={'Login'}>
                <Stack.Screen name={'Login'} component={LogInScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'SignUp'} component={SignUpScreen} options={{headerShown: false}}/>
                <Stack.Screen name={"Tabs"} component={TabAuthenticatedStack} options={{headerShown: false}}/>
            </Stack.Navigator>
        )
    }
}

export default NavigatorUnauthenticatedUsersStack