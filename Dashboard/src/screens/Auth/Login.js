import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Routes from '../../utils/Routes';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginBtnPressed = () => {
    if (email !== '' && password !== '') {
      handleLogin();
    }
  };

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate(Routes.App);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text>Welcome Back</Text>
        <Text>Sign In to your Account</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={e => setEmail(e)}
            style={styles.inputText}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            onChangeText={e => setPassword(e)}
            style={styles.inputText}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => loginBtnPressed()}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupText}
          onPress={() => navigation.navigate(Routes.FirstStep)}>
          <Text>Don't have account?Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputView: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  inputText: {
    width: '100%',
  },
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc000',
    marginTop: 40,
  },
  signupText: {
    marginTop: 20,
  },
});
