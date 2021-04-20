import React from 'react'
import{ View, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, Share } from 'react-native'
import { Button, Text, Card, CardItem, Icon, Left } from 'native-base'
import styles from '../styles/Styles'

export default class NFCScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  async init() {
    const tasks = await getResource('tasks')
    this.setState({tasks})
  }

  componentDidMount() {
    this.init()
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
        <ScrollView>
          <Card transparent style={{ alignSelf:'center', width: 350}}>
            {
              this.state.tasks.map(task => {
                return <CardItem style={{ marginTop: 10, borderRadius:20}}>
                  <Left>
                    <Text>{task.name}</Text>
                  </Left>
                  <TouchableOpacity>
                  <Button transparent onPress={async(e) => {
                    await Share.share({
                      message:
                        task.name + task.description,
                    })
                    }}
                  >
                    <Icon name='share' style={{color: '#6495ED'}}/>
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