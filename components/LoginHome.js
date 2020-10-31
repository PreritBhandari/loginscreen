import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage, Image, _View } from "react-native";
import { Container, Text, Button, Form, Item, Label, Input } from "native-base";

import * as firebase from "firebase";
import Welcome from "./Welcome";

export default class LoginHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  loginUser = async (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user.user.email);
          this.props.navigation.navigate("Welcome");
        });
    } catch (error) {
      console.log(error.toString());
      alert("Invalid Information Provided");
    }
  };
  render() {
    return (
      <Container style={styles.container}>
        <Text style={{ fontSize: 25, color: "orange", paddingBottom: "20%" }}>
          LOG&nbsp;
          <Text style={{ fontWeight: "bold", fontSize: 45, color: "purple" }}>
            In
          </Text>
        </Text>
        <Image
          style={{ width: "35%", height: "20%" }}
          source={require("../assets/loginlogo.png")}
        />
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              onChangeText={(email) => this.setState({ email })}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Item>

          <Item style={{ width: "70%" }} floatingLabel>
            <Label>Password</Label>
            <Input
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Item>

          <Button
            style={{ marginTop: 30 }}
            full
            rounded
            warning
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: "black", fontWeight: "bold" }}>Log In</Text>
          </Button>

          <View style={{ paddingTop: 15, alignItems: "center" }}>
            <Text style={{ color: "grey", fontSize: 12 }}>
              New Here ? &nbsp;
              <Text
                onPress={() => this.props.navigation.navigate("SignUp")}
                style={{ fontSize: 17, color: "red" }}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
