import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage, Image } from "react-native";
import { Container, Text, Button, Form, Item, Label, Input } from "native-base";

import * as firebase from "firebase";
import Welcome from "./Welcome";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 8) {
        alert("Password should be at least 8 characters");
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(this.props.navigation.navigate("LoginHome"));
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Text style={{ fontSize: 25, color: "green", paddingBottom: "20%" }}>
          SIGN&nbsp;
          <Text style={{ fontWeight: "bold", fontSize: 45, color: "purple" }}>
            Up
          </Text>
        </Text>
        <Image
          style={{ width: "55%", height: "20%" }}
          source={require("../assets/signuplogo.png")}
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
            style={{ marginTop: 20 }}
            full
            rounded
            success
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: "black", fontWeight: "bold" }}>Sign Up</Text>
          </Button>

          <View style={{ paddingTop: 15, alignItems: "center" }}>
            <Text style={{ color: "grey", fontSize: 12 }}>
              Already Have An Account ? &nbsp;
              <Text
                onPress={() => this.props.navigation.navigate("LoginHome")}
                style={{ fontSize: 17, color: "red" }}
              >
                Log In
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
