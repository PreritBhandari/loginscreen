import React, { Component } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "native-base";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.welcome}>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "green" }}>
          Welcome You are Logged In
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("LoginHome")}
          rounded
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "25%",
            marginTop: "10%",
          }}
          success
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Log Out</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: "#ffc",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
