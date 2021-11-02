import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/Feed';
import SearchScreen from './screens/SearchScreen';
import User from './screens/User';

const Tab = createBottomTabNavigator();

const tabBarStyleOptions = {
  height: 55,
  backgroundColor: '#000',
  borderTopColor: '#24242499',
  paddingVertical: 10
}

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />

      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="FeedPage" component={SearchScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer> */}

      <NavigationContainer >
        <Tab.Navigator screenOptions={{
          tabBarStyle: tabBarStyleOptions, backBehavior: 'none', "tabBarShowLabel": false,
        }}>
          <Tab.Screen name="." component={HomeScreen} options={{
            headerShown: false,
            showLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-home-sharp" color={'#fff'} size={24} />
            ),
          }} />

          <Tab.Screen name=".." component={SearchScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={'#fff'} size={25} />
            ),
          }} />

          <Tab.Screen name="..." component={AddPostScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="md-videocam-outline" color={'#fff'} size={25} />
            ),
          }} />

          <Tab.Screen name="...." component={ChatsScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart-outline" color={'#fff'} size={25} />
            ),
          }} />

          <Tab.Screen name="....." component={User} options={{
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

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#242424',
    borderColor: '#ffffff88',
    borderWidth: 1,
  },
})