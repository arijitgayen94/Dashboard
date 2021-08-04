import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Routes from '../../utils/Routes';

const FirstStep = ({navigation}) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDisabled, setIsDisable] = useState(true);

  const saveBtnPress = async () => {
    if (
      firstname !== '' &&
      lastname !== '' &&
      email !== '' &&
      password !== '' &&
      confirmPassword !== ''
    ) {
      if (password === confirmPassword) {
        await AsyncStorage.setItem('@FirstName', firstname);
        await AsyncStorage.setItem('@LastName', lastname);
        await AsyncStorage.setItem('@Email', email);
        await AsyncStorage.setItem('@Password', password);
        setIsDisable(false);
      } else {
        Alert.alert('Password does not match');
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.inputView}>
              <TextInput
                placeholder="First name"
                value={firstname}
                keyboardType="default"
                onChangeText={e => setFirstname(e)}
                style={styles.inputText}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                placeholder="Last name"
                keyboardType="default"
                value={lastname}
                onChangeText={e => setLastname(e)}
                style={styles.inputText}
              />
            </View>
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
            <View style={styles.inputView}>
              <TextInput
                placeholder="Confirm Password"
                keyboardType="default"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={e => setConfirmPassword(e)}
                style={styles.inputText}
              />
            </View>
            <View style={styles.buttonsView}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => saveBtnPress()}>
                <Text>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  {backgroundColor: isDisabled ? '#dcdcdc' : '#ffc000'},
                ]}
                disabled={isDisabled}
                onPress={() => navigation.navigate(Routes.SecondStep)}>
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default FirstStep;

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
    marginTop: 20,
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
    width: '45%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc000',
    marginTop: 40,
  },
  signupText: {
    marginTop: 20,
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
