import React from 'react'
import{ View, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Button, Content, Form, Item, Input, Label, Text } from 'native-base'
import styles from '../styles/Styles'

export default class SignUpScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        name:'',
        lastname:'',
        user:'',
        password:''
      }
    }

  async addUser(){
    const docRef = await addDocument('users', this.state)
    this.setState({
      name:'',
      lastname:'',
      user:'',
      password:''
    })
  }
  render(){
    return (
      <ImageBackground source={require('../images/HWO.jpeg')} style={{flex: 1, resizeMode: "cover"}}>
        <ScrollView>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 80            
            }}
          >
            <Image source={require('../images/HW_icono.png')} style={{width: 200, height: 250,}}/>
          </View>
          <View
            style={{
              paddingHorizontal: 30,
            }}
          >
            <Form>
              <Item floatingLabel regular underline>
                <Label style={{color: '#fff'}}>Nombre(s)</Label>
                <Input style={{color: '#fff'}}
                  value={this.state.name}
                  onChangeText={text => {
                    this.setState({ name: text })
                  }}
                />
              </Item>
              <Item floatingLabel regular underline>
                <Label style={{color: '#fff'}}>Apellido(s)</Label>
                <Input style={{color: '#fff'}}
                  value={this.state.lastname}
                  onChangeText={text => {
                    this.setState({ lastname: text })
                  }}
                />
              </Item>
              <Item floatingLabel regular underline>
                <Label style={{color: '#fff'}}>Usuario</Label>
                <Input style={{color: '#fff'}}
                  value={this.state.user}
                  onChangeText={text => {
                    this.setState({ user: text })
                  }}
                />
              </Item>
              <Item floatingLabel regular underline>
                <Label style={{color: '#fff'}}>Contraseña</Label>
                <Input secureTextEntry={true} style={{color: '#fff'}}/>
              </Item>
              <Item floatingLabel regular underline>
                <Label style={{color: '#fff'}}>Repetir contraseña</Label>
                <Input secureTextEntry={true} style={{color: '#fff'}}
                  value={this.state.password}
                  onChangeText={text => {
                    this.setState({ password: text })
                  }}
                />
              </Item>
            </Form>
            <TouchableOpacity>
            <Button rounded style={{backgroundColor: '#9AD9DB', marginTop: 30, alignSelf:'center'}} onPress={() => this.addUser()} onPressOut={() => this.props.navigation.navigate('Tabs')}>
              <Text style={{color: '#000'}}>Crear cuenta</Text>
            </Button>
            </TouchableOpacity>
          </View>
          </ScrollView>
      </ImageBackground>
    )
  }
}
