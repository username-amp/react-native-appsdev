import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook


const RegisterInput = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object
  
    const handleRegister = async () => {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      try {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);
        alert('Registration successful');
        navigation.navigate('Login')
      } catch (error) {
        alert('Error registering user');
      }
    };
  
    return (
      <View style={styles.container}>
        <Text>Register Page</Text>
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
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
        <Button title="Register" onPress={handleRegister} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: 300,
        height: 300,
        padding: 20,
        borderRadius: 30,
    }
})

export default RegisterInput