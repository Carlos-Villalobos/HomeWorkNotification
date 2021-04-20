import React from 'react'
import { View, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base'
import { SearchBar, Avatar, Accessory, CheckBox } from 'react-native-elements'

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async init() {
    const users = await getResource('users')
    this.setState({users})
  }

  componentDidMount() {
    this.init()
  }
  
  render(){
    const window = Dimensions.get('window')

    return (
      <ImageBackground source={require('../images/HWO.jpeg')} style={{width: window.width, height: window.height}}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 80}}>
          <Image source={require('../images/Titulo.png')} style={{resizeMode: 'stretch', height:70, width:300}}/>
        </View>
        <ScrollView>
          <View style={{flexDirection:'column', justifyContent:'center'}}>
            {
              this.state.users.map(user => {
                return <Card transparent style={{ alignSelf:'center', width: 250}}>
                  <CardItem style={{ marginTop: 10, borderRadius:20}}>
                    <Body>
                      <Right>
                        <Avatar source={require('../images/me.jpeg')} rounded size={130} activeOpacity={0.7}/>
                      </Right>
                      <Text style={{alignSelf:'center', marginTop:10}}>{user.name} {user.lastname}</Text>
                      <Text style={{fontWeight:'bold', alignSelf:'center', marginTop:5}}>@{user.user}</Text>
                      <Button transparent 
                      onPress={() => this.props.navigation.navigate('Login')} 
                      onPressOut={ async(e)=> {
                        const success = await deleteDocument('users', user._key)
                        if(success){
                          this.init()
                        }}}
                      style={{alignSelf:'center'}}>
                        <Text style={{fontWeight:'bold'}}>Borrar perfil</Text>
                        <Icon name='trash' style={{color: '#6495ED'}} />
                      </Button>
                      <Button transparent onPress={() => this.props.navigation.navigate('Login')} style={{alignSelf:'center'}}>
                        <Text style={{fontWeight:'bold'}}>Salir</Text>
                        <Icon name='exit' style={{color: '#6495ED'}} />
                      </Button>
                    </Body>
                  </CardItem>
                </Card>
              })
            }
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}
/*
<Button transparent style={{alignSelf:'center'}}>
                        <Text style={{fontWeight:'bold'}}>Editar</Text>
                        <Icon name='create' style={{color: '#6495ED'}} />
                      </Button>
                      */