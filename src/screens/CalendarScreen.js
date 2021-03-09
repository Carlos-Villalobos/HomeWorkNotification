import React from 'react'
import { View, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Container, Button, Content, Form, Item, Input, Label, Text } from 'native-base'
import { Calendar } from 'react-native-calendars'
import styles from '../styles/Styles'
import Tasks from './TasksScreen'

export default class CalendarScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      markedDates : { }
    }
  }

  selectNewDay(data){

    const newMarkedDates={}

    newMarkedDates[data.dateString] = {
      selected: true,
      marked: true,
      selectedColor: '#6495ED',
      //dotColor: 'red'
    }

    this.setState({ markedDates: newMarkedDates})
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
            <View
            style={{
                marginTop: 80,
                paddingHorizontal:30
            }}
            >
              <Calendar
                monthFormat={'MMM yyyy'}
                //hideExtraDays={true}
                firstDay={1}
                //showWeekNumbers={true}
                onDayPress={(day) => this.selectNewDay(day)}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                markedDates={this.state.markedDates}
                //markingType={'multi-dot'}
                // Specify theme properties to override specific styles for calendar parts. Default = {}
                theme={{
                  backgroundColor: '#ffffff',
                  calendarBackground: '#ffffff',
                  textSectionTitleColor: '#b6c1cd',
                  textSectionTitleDisabledColor: '#d9e1e8',
                  selectedDayBackgroundColor: '#00adf5',
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: '#00adf5',
                  dayTextColor: '#2d4150',
                  textDisabledColor: '#d9e1e8',
                  dotColor: '#00adf5',
                  selectedDotColor: '#ffffff',
                  arrowColor: '#2C82EE',
                  disabledArrowColor: '#d9e1e8',
                  monthTextColor: '#2C82EE',
                  indicatorColor: 'blue',
                  textDayFontFamily: 'monospace',
                  textMonthFontFamily: 'monospace',
                  textDayHeaderFontFamily: 'monospace',
                  textDayFontWeight: '300',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: 20,
                  textMonthFontSize: 20,
                  textDayHeaderFontSize: 16
                }}
              />
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity>
                <Button rounded style={{backgroundColor:'#6495ED', alignSelf:'center'}} onPress={() => this.props.navigation.navigate('Tareas')}>
                  <Text>Agregar tarea</Text>
                </Button>
                </TouchableOpacity>
            </View>
          </ImageBackground>
        )
    }
}
/*const styles = StyleSheet.create({
  image: {
    width: window.width,
    height: window.height
  },#9AD9DB
  /*image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
    justifyContent: "center"
  },
});*/