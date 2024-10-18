// RegisterPage.js
import RegisterInput from '../components/RegisterInput';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import LoginCurve from '../components/LoginCurve';
import ExtraPart from '../components/ExtraPart';
import RegisterCurve from '../components/RegisterCurve';
const RegisterPage = () => {
  return (
    <LinearGradient colors={['#F6F1F7', '#C7A9CF']} style={styles.container}>
      <RegisterInput />
      <LoginCurve />
      <RegisterCurve />
      <ExtraPart />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterPage;
