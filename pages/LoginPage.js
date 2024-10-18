// LoginPage.js
import LoginInput from '../components/LoginInput'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import LoginCurve from '../components/LoginCurve';
import RegisterCurve from '../components/RegisterCurve';
import RegisterPart from '../components/RegisterPart';


const LoginPage = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  return (
    <LinearGradient colors={['#F6F1F7', '#C7A9CF']} style={styles.container}>
 
   <LoginInput />
   <LoginCurve />
   <RegisterCurve />
  <RegisterPart />
  </LinearGradient>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginPage;