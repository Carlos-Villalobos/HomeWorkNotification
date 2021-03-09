import React from 'react'
import{ View, ImageBackground, Image, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { Card, CardItem, Text, Button, Icon, Left, Body, Right, Item, Input, Label, DatePicker } from 'native-base'
import styles from '../styles/Styles'
import { addDocument } from '../initFirebase'

export default class TasksScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        name:'',
        description:'',
        difficulty:'medium',
        due_date: new Date
      },
    this.setDate = this.setDate.bind(this);
    }

  setDate(newDate) {
    this.setState({ due_date: newDate });
  }

  async addTask(){
    const docRef = await addDocument('tasks', this.state)
    this.setState({
      name:'',
      description:'',
      difficulty:'medium',
      due_date: new Date
    })
  }

  render(){
    const window = Dimensions.get('window')
    
    return (
      <ImageBackground source={require('../images/HWO.jpeg')} style={{width: window.width, height: window.height}}>
        <View
          style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 80            
          }}
        >
          <Image source={require('../images/Titulo.png')} style={{resizeMode: 'stretch', height:70, width:300}}></Image>
        </View>
            <Card style={{ alignSelf:'center', width: 350 }}>
            <CardItem>
                <Body>
                  <Text style={{fontWeight: 'bold', fontSize:20}}>Notificación</Text>
                </Body>
                <Right>
                <Icon name='alarm' style={{fontSize: 26, color:'#6495ED'}}/>
                </Right>
            </CardItem>
            <CardItem>
              <Body>
              <Item stackedLabel style={{backgroundColor:'#6495ED', borderRadius:10, width: 310}}>
                <Label style={{color:'#fff', paddingHorizontal:10}}>Nombre de la tarea:</Label>
                <Input style={{color:'#fff'}} 
                    value={this.state.name}
                    onChangeText={text => {
                      this.setState({ name: text })
                    }}
                />
              </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Item stackedLabel style={{backgroundColor:'#6495ED', borderRadius:10, width: 310}}>
                  <Label style={{color:'#fff', paddingHorizontal:10}}>Descripción:</Label>
                  <Input style={{color:'#fff'}} 
                    value={this.state.description}
                    onChangeText={text => {
                      this.setState({ description: text})
                    }}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <TouchableOpacity onPress={() => this.setState({difficulty:'easy'})}>
                  <Button rounded success small disabled={ this.state.difficulty !== 'easy' } >
                    <Text>Fácil</Text>
                  </Button>
                  </TouchableOpacity>
                </Body>
              </Left>
              <Body>
                <TouchableOpacity onPress={() => this.setState({difficulty:'medium'})}>
                <Button rounded warning small disabled={ this.state.difficulty !== 'medium' } >
                  <Text>Medio</Text>
                </Button>
                </TouchableOpacity>
              </Body>
              <Right>
                <Body>
                  <TouchableOpacity onPress={() => this.setState({difficulty:'hard'})}>
                  <Button rounded danger small disabled={ this.state.difficulty !== 'hard' } >
                    <Text>Difícil</Text>
                  </Button>
                  </TouchableOpacity>
                </Body>
              </Right>
            </CardItem>
            <View style={{alignSelf:'center'}}>
              <Text>Elige la fecha de entrega</Text>
              <DatePicker
                defaultDate={this.state.newDate}
                minimumDate={new Date}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="      DD/MM/AAAA"
                textStyle={{ color: "#000", textAlign:'center'}}
                placeHolderTextStyle={{ color: "#000" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </View>
          </Card>
          <View style={{marginTop: 20}}>
            <TouchableOpacity >
            <Button rounded style={{backgroundColor:'#6495ED', alignSelf:'center'}} 
            onPress={() => this.addTask()} 
            onPressOut={() => this.props.navigation.navigate('Inicio')}>
              <Text>Agregar tarea</Text>
            </Button>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    )
  }
}
/*
              <Button rounded style={{backgroundColor:'#6495ED', width:162, height:45}}>
              </Button>
              */