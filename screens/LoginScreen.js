import React from 'react'
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { Button, Text } from "../components";

import { theme } from "../constants";
import { ScrollView } from 'react-native-gesture-handler';


function LoginScreen() {


  return (

      <ScrollView style={{width:'100%',flex:1}}   >
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
        <Text style={styles.hading} center color='#2AAD68' bold size={50}>LogIn</Text>
      <TextInput
        style={styles.input}
        textContentType="emailAddress"  
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        textContentType="password"
        placeholder="Password"
      />

      <Button style={styles.buttton}
        onPress={() => handleLogin()}
      >
        <Text center color='white' bold size={19}>LogIn</Text>
      </Button>

    </KeyboardAvoidingView>
      </ScrollView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hading:{
    marginBottom: 70
  },
  input: {
    width: "80%",
    height: 70,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 20,
    backgroundColor: '#ededed'
},
  buttton: {
    backgroundColor: theme.colors.dark,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  }
});