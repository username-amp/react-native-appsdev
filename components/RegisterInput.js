import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterInput = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1086216819726-mf0a72sj38hngpnt6bvvq6s5sanatque.apps.googleusercontent.com',
    });
  }, []);

  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }
    
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

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices();
      
      // Sign in the user with Google and get user info
      const userInfo = await GoogleSignin.signIn();
      
      // Get the ID token from the user info
      const { idToken } = userInfo;
  
      // Create a Google credential with the ID token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      
      console.log('Signed in with Google!', userInfo);
      // Navigate or perform actions after successful sign in
      navigation.navigate('Dashboard'); // Replace 'Home' with your desired route
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in is in progress already');
      } else {
        console.error(error);
      }
    }
  }
  

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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
          <Icon name="google" size={20} color="#fff" style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
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
    fontWeight: 'bold',
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
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#DB4437',
    padding: 10,
    borderRadius: 30,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    marginRight: 10,
  },
  googleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterInput;
