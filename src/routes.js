import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import MyLinks from './pages/MyLinks';
import colors from './styles/colors';

import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: colors.fundoItem,
        activeTintColor: colors.corItem,
        marginTop: 16,
        labelStyle: {
          fontSize: 19,
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Encurtar Link',
          drawerIcon: ({ focused, size, color}) => (
            <Ionicons
              name={focused ? 'cube' : 'cube-outline'}
              color={color}
              size={size}
            />
          )
        }}
      >
      </Drawer.Screen>
      <Drawer.Screen
        name="MyLInks"
        component={MyLinks}
        options={{
          title: 'Meus Links',
          drawerIcon: ({ focused, size, color}) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color={color}
              size={size}
            />
          )
        }}
      >
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}