import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const LoginInput = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const handleLogin = async () => {
    // Your login logic here
    if (username.length === 0 || password.length === 0) {
      alert('Please enter a username and password');
      return;
    } 

    const storedUsername = await AsyncStorage.getItem('username')
    const storedPassword = await AsyncStorage.getItem('password')
    if (storedUsername !== username || storedPassword !== password) {
      alert('Invalid username or password');
      return;
    }

    navigation.navigate('Dashboard');
  };
  return (
    <View>
      <Text>Login Page</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={{ marginTop: 10 }}>
        Don't have an account?{' '}
        <Text
          style={{ color: 'blue' }}
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </Text>
      </Text>
    </View>
  )
}

export default LoginInput