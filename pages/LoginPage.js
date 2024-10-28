import LoginInput from '../components/LoginInput';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import LoginCurve from '../components/LoginCurve';
import RegisterCurve from '../components/RegisterCurve';
import RegisterPart from '../components/RegisterPart';
import TopSquare from '../components/background/TopSquare';
import MidSquare from '../components/background/MidSquare';
import BotSquare from '../components/background/BotSquare';

const LoginPage = () => {
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
        <LoginInput />
        <LoginCurve />
        <RegisterCurve />
        <RegisterPart />
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

export default LoginPage;
