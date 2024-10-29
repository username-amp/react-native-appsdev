import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const LoginInput = () => {
  const [loaded] = useFonts({
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'),
    'OpenSans-Regular': require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
  });
  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (username.length === 0 || password.length === 0) {
      alert('Please enter a username and password');
      return;
    }

    const storedUsername = await AsyncStorage.getItem('username');
    const storedPassword = await AsyncStorage.getItem('password');
    if (storedUsername !== username || storedPassword !== password) {
      alert('Invalid username or password');
      return;
    }

    setUsername('');
    setPassword('');

    navigation.navigate('Dashboard');
  };

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.lagayanngpic}>
        <Image source={require('../assets/logoPe.png')} style={styles.logo} />
      </View>

      <View style={styles.lagayannglogintext}>
        <Text style={styles.loginText}>Sign In</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#690981" style={styles.icon} />
        <TextInput
          placeholder="Enter Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#690981" style={styles.icon} />
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 40,
    width: '80%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },

  loginText: {
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
    marginBottom: 20,
    color: '#690981',
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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginBottom: 20,
    paddingVertical: 10,
  },

  icon: {
    marginRight: 10,
  },

  textInput: {
    width: '80%',
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButton: {
    backgroundColor: '#956AA1',
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    width: '100%',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
});

export default LoginInput;
