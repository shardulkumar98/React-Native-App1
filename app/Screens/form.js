import React, {useState} from 'react';
import {useValidation} from 'react-native-form-validator';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {validate, isFieldInError, getErrorsInField} = useValidation({
    state: {email, password},
  });

  const _onPressButton = () => {
    if (email && password) {
      validate({
        email: {email: true, required: true},
        password: {
          hasNumber: '',
          hasUpperCase: '',
          hasLowerCase: '',
          hasSpecialCharacter: '',
          required: true,
        },
      });
      Alert.alert('You Logged in');
      console.log(email, password);
    } else {
      Alert.alert('username and password is incorrect');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Login your account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={setEmail}
          value={email}
        />
        {isFieldInError('email') &&
          getErrorsInField('email').map(errorMessage => (
            <Text>{errorMessage}</Text>
          ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Enter your password"
          onChangeText={setPassword}
          value={password}
        />
        {isFieldInError('password') &&
          getErrorsInField('password').map(errorMessage => (
            <Text>{errorMessage}</Text>
          ))}
      </View>
      <TouchableHighlight style={styles.btn} onPress={_onPressButton}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F7F7F7',
  },
  headerText: {
    fontSize: 30,
    marginVertical: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    marginHorizontal: 40,
    marginVertical: 15,
  },

  input: {
    borderBottomWidth: 2,
    borderColor: '#ACB992',
    padding: 4,
  },
  btn: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  btnText: {
    borderWidth: 1,
    padding: 5,
    width: 100,
    textAlign: 'center',
    borderColor: '#ACB992',
    borderRadius: 10,
  },
});
