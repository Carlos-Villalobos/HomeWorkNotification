import React from 'react'
import{ View, Dimensions, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Form, Item, Input, Label, Text, Icon } from 'native-base'
import styles from '../styles/Styles'

export default class LogInScreen extends React.Component{

  /*state = {
    icon: "eye-off",
    password: true
  };

  _changeIcon() {
    this.setState(prevState => ({
        icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
        password: !prevState.password
    }));
  }*/
  
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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
    //const { icon, onChange } = this.props;
    return (
        <ImageBackground source={require('../images/HWO.jpeg')} style={{flex: 1, resizeMode: "cover"}}>
          <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 80            
            }}
          >
            <Image source={require('../images/HW_T.png')} style={{width: 160, height: 230,}}/>
          </View>
          <View
            style={{
              paddingHorizontal: 40, 
            }}
          >
          <Form>
            <Item floatingLabel regular underline>
              <Label style={{color: '#fff'}}>Usuario</Label>
              <Input style={{color: '#fff'}}/>
            </Item>
            <Item floatingLabel regular underline>
              <Label style={{color: '#fff'}}>Contraseña</Label>
              <Input secureTextEntry={true}  style={{color: '#fff'}}/>
            </Item>
          </Form>
          <TouchableOpacity>
          <Button rounded style={{backgroundColor: '#9AD9DB', marginTop:30, alignSelf:'center'}} onPress={() => this.props.navigation.navigate('Tabs')}>
            <Text style={{fontWeight:'bold'}}>Entrar</Text>
          </Button>
          </TouchableOpacity>
          <TouchableOpacity>
          <Button rounded style={{backgroundColor: '#fff', marginTop:50, alignSelf:'center'}} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{color:'#000', fontWeight:'bold'}}>Crear cuenta</Text>
          </Button>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

/*
  <Icon active name={icon} />
  <Label style={{color: '#fff'}}>Contraseña</Label>
  <Input secureTextEntry={this.state.password} onChangeText={(e) => onChange(e)} style={{color: '#fff'}}/>
  <Icon name={this.state.icon} onPress={() => this._changeIcon()} style={{color: '#fff'}}/>
*/