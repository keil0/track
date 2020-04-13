import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>Sign Up</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default SignupScreen;
