import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Routes from '../../utils/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const Register = ({navigation}) => {
  const resetBtnPressed = async () => {
    AsyncStorage.clear();
  };
  const cancelBtnPressed = async () => {
    AsyncStorage.clear();
    navigation.navigate(Routes.Login);
  };

  const onSubmitBtnPress = async () => {
    const email = await AsyncStorage.getItem('@Email');
    const pass = await AsyncStorage.getItem('@Password');
    auth()
      .createUserWithEmailAndPassword(email, pass)
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => resetBtnPressed()}>
          <Text>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onSubmitBtnPress()}>
          <Text>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => cancelBtnPressed()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

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
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc000',
    marginTop: 40,
  },
});
