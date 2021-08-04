import React, {useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import * as Routes from '../../utils/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecondStep = ({navigation}) => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [isDisabled, setIsDisable] = useState(true);

  const saveBtnPress = async () => {
    if (state !== '' && city !== '' && zip !== '') {
      await AsyncStorage.setItem('@State', state);
      await AsyncStorage.setItem('@City', city);
      await AsyncStorage.setItem('@Zip', zip);
      setIsDisable(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.inputView}>
              <TextInput
                placeholder="State"
                value={state}
                keyboardType="default"
                onChangeText={e => setState(e)}
                style={styles.inputText}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                placeholder="City"
                keyboardType="default"
                value={city}
                onChangeText={e => setCity(e)}
                style={styles.inputText}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Zip"
                keyboardType="number-pad"
                value={zip}
                onChangeText={e => setZip(e)}
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
                onPress={() => navigation.navigate(Routes.Register)}>
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SecondStep;

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
