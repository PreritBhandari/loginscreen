import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import LoginHome from "./components/LoginHome";
import Welcome from "./components/Welcome";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as firebase from "firebase";
import SignUp from "./components/SignUp";

const firebaseConfig = {
  apiKey: "AIzaSyC40yGV7Ta8bE__1QtfOrxZEOEdUh9SegE",
  authDomain: "loginscreen-5fc89.firebaseapp.com",
  databaseURL: "https://loginscreen-5fc89.firebaseio.com",
  projectId: "loginscreen-5fc89",
  storageBucket: "loginscreen-5fc89.appspot.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="LoginHome"
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="LoginHome" component={LoginHome} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
