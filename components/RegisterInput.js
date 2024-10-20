import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterInput = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      alert('Registration successful');
      navigation.navigate('Login');
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.lagayanngpic}>
        <Image source={require('../assets/logoPe.png')} style={styles.logo} />
      </View>
      <View style={styles.lagayannglogintext}>
        <Text style={styles.loginText}>Register</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -10 },
      },
    }),
  },

  lagayanngpic: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    height: 80,
    width: 80,
  },

  lagayannglogintext: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#690981',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginBottom: 20,
    paddingVertical: 10,
  },

});

export default RegisterInput;
