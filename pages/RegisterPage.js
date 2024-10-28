// RegisterPage.js
import RegisterInput from '../components/RegisterInput';
import { useLayoutEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginCurve from '../components/LoginCurve';
import ExtraPart from '../components/ExtraPart';
import RegisterCurve from '../components/RegisterCurve';
import TopSquare from '../components/background/TopSquare';
import MidSquare from '../components/background/MidSquare';
import BotSquare from '../components/background/BotSquare';
const RegisterPage = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <LinearGradient colors={['#F6F1F7', '#C7A9CF']} style={styles.container}>
      <TopSquare />
      <MidSquare />
      <BotSquare />
      <View style={styles.content}>
      <RegisterInput />
      <LoginCurve />
      <RegisterCurve />
      <ExtraPart />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterPage;
