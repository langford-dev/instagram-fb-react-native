import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import { Transition } from 'react-native-reanimated';
import FeedPage from './screens/Feed'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FeedPage" component={FeedPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return <View style={styles.container}>
    {/* <StatusBar
      backgroundColor="#fff"
      barStyle="light-content"
    /> */}

    {/*  */}

    <ScrollView>
      <View style={styles.formContainer}>
        <Text style={[styles.centerText, styles.authPageName]}>Welcome</Text>
        <View style={styles.logoImgContainer}>
          <Image style={styles.logoImg} source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Facebook-Messenger-Logo-PNG-HD-Image.png' }}
            style={{ width: 100, height: 100 }} />
        </View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>

        <TextInput style={styles.inputBox} placeholder={'Full name'} placeholderTextColor="#cacaca" />
        <TextInput style={styles.inputBox} placeholder={'Username'} placeholderTextColor="#cacaca" />
        <TextInput style={styles.inputBox} placeholder={'Phone number'} placeholderTextColor="#cacaca" />
        <TextInput style={styles.inputBox} placeholder={'Password'} placeholderTextColor="#cacaca" />
        {/* <Text style={styles.helpText}>Youll be creating your profile</Text> */}
        <View style={styles.space}></View>
        <TouchableOpacity style={styles.defaultBtn} onPress={() => navigation.navigate('FeedPage')}>
          <Text style={styles.defaultBtnText}>Next</Text>
        </TouchableOpacity>
        <View style={styles.smallSpace}></View>
        <TouchableOpacity style={[styles.defaultBtn, styles.altAuthBtn]}>
          <Image source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' }}
            style={{ width: 30, height: 30 }} />
          <Text style={[styles.textBtn, styles.altAuthBtnText]}>Continue with Google</Text>
        </TouchableOpacity>

        <View style={styles.smallSpace}></View>
        <View style={styles.smallSpace}></View>

        <TouchableOpacity>
          <View style={styles.centerContent}>
            <Text>Have an account?</Text>
            <Text style={[styles.textBtn]}> Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView >
  </View >
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  centerText: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 50,
  },

  whiteText: {
    color: '#fff'
  },

  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  authPageName: {
    fontSize: 30,
  },

  textBtn: {
    color: '#006ee6'
  },

  formContainer: {
    padding: 30,
    marginTop: 200,
    height: '50%',
    justifyContent: 'center',
  },

  // helpText: {
  //   textAlign: 'center',
  //   marginTop: 10,
  //   color: '#999',
  // },

  space: {
    height: 20
  },

  smallSpace: {
    height: 10
  },

  logoImgContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 130,
  },

  logoImg: {
    margin: 'auto'
  },

  altAuthBtnText: {
    marginLeft: 10
  },

  appBar: {
    padding: 15,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#f1f1f111',
    borderBottomWidth: 1,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
    marginTop: -30,
    // backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight + 20,
  },

  appBarTitle: {
    fontSize: 25,
    color: '#000'
  },

  inputBox: {
    borderColor: '#f1f1f1',
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#fafafa',
  },

  defaultBtn: {
    backgroundColor: '#006ee6',
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },

  defaultBtnText: {
    color: '#fff',
  },

  altAuthBtn: {
    backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: '#006ee6',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
