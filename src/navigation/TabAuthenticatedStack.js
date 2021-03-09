import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import TasksScreen from '../screens/TasksScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CalendarScreen from '../screens/CalendarScreen'
import NFCScreen from '../screens/NFCScreen'
import DetailsScreen from '../screens/DetailsScreen'

const Tab = createMaterialBottomTabNavigator();

export default class TabScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator activeColor="#6495ED" inactiveColor="#696969" barStyle={{ backgroundColor: '#fff' }}>
                <Tab.Screen
                    name="Inicio"
                    component={DetailsScreen}
                    options={{
                        tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Tareas"
                    component={TasksScreen}
                    options={{
                        tabBarIcon: ({ color }) => <TabBarIcon name="ios-book" color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Perfil"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Calendario"
                    component={CalendarScreen}
                    options={{
                        tabBarIcon: ({ color }) => <TabBarIcon name="ios-calendar" color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Compartir"
                    component={NFCScreen}
                    options={{
                        tabBarIcon: ({ color }) => <TabBarIcon name="md-share" color={color} />,
                    }}
                />
            </Tab.Navigator>
        )
    }
}

function TabBarIcon(props) {
    return <Ionicons size={30} style={{ marginBottom: -10 }} {...props} />;
}