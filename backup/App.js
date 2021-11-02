import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PostCard from './components/PostCard'
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeColors } from 'react-navigation';

import HomeScreen from './screens/Feed';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarStyleOptions = {
  height: 55,
  backgroundColor: '#242424',
  borderTopColor: '#f1f1f111',
  showLabel: false,
  paddingVertical: 10
}

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#242424"
        barStyle="light-content"
      />

      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarStyle: tabBarStyleOptions, backBehavior: 'none', showLabel: false,
        }}>
          <Tab.Screen name="." component={HomeScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={'#fff'} size={25} />
            ),
          }} />

          <Tab.Screen name=".." component={SearchScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="video" color={'#fff'} size={25} />
            ),
          }} />

          <Tab.Screen name="..." component={AddPostScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="plus-square" color={'#fff'} size={25} />
            ),
          }} />

          <Tab.Screen name="...." component={ExploreScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={'#fff'} size={25} />
            ),
          }} />

          <Tab.Screen name="....." component={ChatsScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <View style={styles.avatar}></View>
            ),
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

function SearchScreen() {
  return (
    <Text>Search Screen</Text>
  );
}

function ChatsScreen() {
  return (
    <Text>ChatsScreen Screen</Text>
  );
}

function AddPostScreen() {
  return (
    <Text>Add Screen</Text>
  );
}

function ExploreScreen() {
  return (
    <Text>ExploreScreen Screen</Text>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#444', borderColor: '#f1f1f133',
    borderWidth: 1,
  },
})