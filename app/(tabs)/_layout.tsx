import { Tabs } from 'expo-router';
import { FontAwesome, AntDesign, Entypo, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';

export default () => {
  return (
    <Tabs
      tabBarOptions={{
        activeTintColor: darkMode.tabActive,
        inactiveTintColor: darkMode.tabInactive,
        style: {
          backgroundColor: darkMode.primary,
        },
        indicatorStyle: {
          backgroundColor: darkMode.secondary,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <Entypo name="home" size={size} color={color} />
          </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerTitle: 'HOME',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="gender"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <Ionicons name="ios-transgender" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'GENDER PREDICTION',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="age"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <MaterialIcons name="date-range" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'AGE PREDICTION',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="country"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <MaterialIcons name="location-city" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'UNIVERSITY SEARCH',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <MaterialCommunityIcons name="weather-cloudy" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'WEATHER',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="wordpress"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <FontAwesome name="wordpress" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'WORDPRESS SITE',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ marginBottom: focused ? -5 : 0 }}>
              <AntDesign name="exclamationcircleo" size={size} color={color} />
            </View>
          ),
          tabBarStyle: {borderTopWidth: 0},
          tabBarLabel: () => null,
          tabBarActiveBackgroundColor: darkMode.primary,
          tabBarInactiveBackgroundColor: darkMode.primary,
          headerTitle: 'ABOUT',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold', },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: darkMode.headerBackground,
          },
          headerTintColor: darkMode.headerText,
        }}
      />
    </Tabs>
  );
};
