import React from 'react'
import{ View, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView} from 'react-native'
import { Card, CardItem, Text, Button, Icon, Left } from 'native-base'
import { Badge } from 'react-native-elements'
import Overlay from '../components/Overlay'

export default class DetailsScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      tasks: [],
      id: [],
      users: [],
      dataOverlay: ''
    }
  }

  async init() {
    const tasks = await getResource('tasks')
    this.setState({tasks})
    const users = await getResource('users')
    this.setState({users})
  }

  componentDidMount() {
    this.init()
  }

  getTaskColor (difficulty) {
    switch(difficulty){
      case 'hard': 
        return '#ff0000';
      case 'medium':
        return '#ffcc00';
      case 'easy':
        return '#008000';
    }
  }

  render(){
    const window = Dimensions.get('window')
    
    return (
      <ImageBackground source={require('../images/HWO.jpeg')} style={{width: window.width, height: window.height}}>
        
        <Overlay 
          closeOverlay={() => this.setState({ dataOverlay: '' })}   
          dataOverlay={this.state.dataOverlay}     
        />

        <View
          style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 80            
          }}
        >
          <Image source={require('../images/Titulo.png')} style={{resizeMode: 'stretch', height:70, width:300}}></Image>
        </View>
        <View style={{marginLeft:30}}>
          {
            this.state.users.map(user => {
              return  <Text style={{fontSize:20, color:'#fff'}}>¡Hola {user.name}!</Text>
            })
          }
          <Text note style={{color:'#fff'}}>¡Te muestro tus tareas!</Text>
        </View>
        {/*<Button transparent onPress={() => this.props.navigation.navigate('Login')}>
          <Icon name="exit" style={{color: '#fff'}}/>
        </Button>*/}
        <ScrollView>
        <Card transparent style={{ alignSelf:'center', width: 350}}>
          {
            this.state.tasks.map(task => {
              return <CardItem style={{ marginTop: 10, borderRadius:20}} key={ task._key } >
                <Left>
                  <Text>{task.name}</Text>
                  {/*<Text note>{task.difficulty}</Text>{/* #ffcc00 008000 ff0000*/}
                </Left>
                <Badge 
                  badgeStyle={{
                    backgroundColor: this.getTaskColor(task.difficulty),
                    width:20, 
                    height:10
                  }} 
                />
                <TouchableOpacity>
                  <Button 
                    transparent
                    onPress={() => this.setState({ dataOverlay: task. description })}
                  >
                    <Icon name="information-circle" style={{color: '#6495ED'}}/>
                  </Button>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Button transparent onPress={ async(e)=> {
                    const success = await deleteDocument('tasks', task._key)
                    if(success){
                      this.init()
                    }}}>
                    <Icon name='trash' style={{color: '#6495ED'}}/>
                  </Button>
                </TouchableOpacity>
              </CardItem>
            })
          }
        </Card>
        </ScrollView>
      </ImageBackground>
    )
  }
}
/*
      <Card transparent style={{ alignSelf:'center', width: 350}}>
          <CardItem style={{borderRadius:50, height:50, marginBottom:35}}>
            <Item>
              <Icon name="ios-search" style={{color: '#6495ED'}}/>
              <Input placeholder="Buscar tarea" />
              <TouchableOpacity>
              <Button transparent>
                <Icon name="paper-plane" style={{color: '#6495ED'}}/>
              </Button>
              </TouchableOpacity>
            </Item>
          </CardItem>
        </Card>
*/