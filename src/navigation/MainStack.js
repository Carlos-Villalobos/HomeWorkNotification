import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import NavigatorUnauthenticatedUsersStack from './NavigatorUnauthenticatedUsersStack'
import TabAuthenticatedStack from './TabAuthenticatedStack'

const Stack = createStackNavigator();

export default class MainStack extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render (){
    return (
      <NavigationContainer>
          <Stack.Navigator>
            {
              this.state.isLoggedIn ?
                <Stack.Screen name={"Tabs"} component={TabAuthenticatedStack} options={{headerShown: false}}/>
              :
                <Stack.Screen name={"HMW"} component={NavigatorUnauthenticatedUsersStack} options={{headerShown: false}}/>
            }            
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
/*
headerStyle:{backgroundColor:'#6495ed'
headerStyle:{backgroundColor:'transparent'}
headerShown: false
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Calendar" component={CalendarScreen} />
            <Stack.Screen name="Tasks" component={TasksScreen} />
            <Stack.Screen name="NFC" component={NFCScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
*/