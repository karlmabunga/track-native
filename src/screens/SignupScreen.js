import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation}) => {
  const { state, signup } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container} >

    <Spacer>
    <Text h3>Sign Up for Tracker </Text>
    </Spacer>

    <Input autoCapitalize="none" autoCorrect={false} label="Email" onChangeText={(newEmail) => setEmail(newEmail)} />
    <Spacer />
    <Input secureTextEntry={true} autoCapitalize="none" autoCorrect={false} label="Password" onChangeText={(newPassword) => setPassword(newPassword)} />

    {state.errorMessage ? <Text>{state.errorMessage}</Text> : null }

    <Spacer>
    <Button title="Sign Up" onPress={() => signup({ email, password })} />
    </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  }
});

export default SignupScreen;
