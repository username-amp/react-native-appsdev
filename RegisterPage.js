// RegisterPage.js
import RegisterInput from './components/RegisterInput';
import React, { useRef, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Animated, Easing, View } from 'react-native';

const RegisterPage = () => {
  const rotateAnim1 = useRef(new Animated.Value(0)).current;
  const rotateAnim2 = useRef(new Animated.Value(0)).current;
  const rotateAnim3 = useRef(new Animated.Value(0)).current;

  // Function to start spinning with a delay
  const startSpinning = (animation, delay) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 40000, // Duration of one full rotation
          useNativeDriver: true,
          easing: Easing.linear,
          delay: delay, // Delay for starting the spin
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 0, // Reset the value to 0 immediately
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    // Add delays to each spin
    startSpinning(rotateAnim1, 0);      // No delay for first box
    startSpinning(rotateAnim2, 6000);   // 3 second delay for second box
    startSpinning(rotateAnim3, 8000);   // 6 second delay for third box
  }, []);

  // Interpolating rotate value to spin the squares infinitely
  const spin1 = rotateAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spin2 = rotateAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spin3 = rotateAnim3.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <LinearGradient colors={['#FFDE5A', '#650382']} style={styles.container}>
  
    <Animated.View style={[styles.box1, { transform: [{ rotate: spin1 }] }]} />
    <Animated.View style={[styles.box2, { transform: [{ rotate: spin2 }] }]} />
    <Animated.View style={[styles.box3, { transform: [{ rotate: spin3 }] }]} />
    <RegisterInput />
  </LinearGradient>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
box1: {
  width: 300,
  height: 300,
  backgroundColor: '#b77e8d',
  position: 'absolute',
  left: -90,
  bottom: 150,
  borderRadius: 20,
},
box2: {
  width: 300,
  height: 300,
  backgroundColor: '#904798',
  position: 'absolute',
  right: -60,
  bottom: -40,
  borderRadius: 20,
},
box3: {
  width: 300,
  height: 300,
  backgroundColor: '#c09953',
  position: 'absolute',
  right: -120,
  top: 105,
  borderRadius: 20,
},


});




export default RegisterPage;