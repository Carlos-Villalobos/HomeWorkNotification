import React, { Component } from 'react';
import { StyleSheet, View, Clipboard } from 'react-native';
import MainStack from './src/navigation/MainStack'
import * as Notifications from 'expo-notifications'; 
import { registerForPushNotificationsAsync } from './src/registerForPushNotificationsAsync'


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


class App extends React.Component {

  state = {
    token: null
  }
  
  async componentDidMount(){
    const token = await registerForPushNotificationsAsync()

    Clipboard.setString(token)

    this.setState({token})

    Notifications.addNotificationReceivedListener(this._handleNotification);
    
    Notifications.addNotificationResponseReceivedListener(this._handleNotificationResponse);

  }
  _handleNotification = notification => {
    this.setState({ notification: notification });
  };

  _handleNotificationResponse = response => {
    console.log(response);
  };
  render (){
    return (
      <MainStack/>
    )
  }
}

export default App