import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { BlurView } from 'expo-blur';

const BotSquare = () => {
  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      rotationValue.setValue(0);
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }).start(() => startRotation());
    };

    const delay = 1000;
    const timeoutId = setTimeout(startRotation, delay);

    return () => clearTimeout(timeoutId);
  }, [rotationValue]);

  const rotateInterpolate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.outsideContainer, { transform: [{ rotate: rotateInterpolate }] }]}>
        <BlurView style={styles.blurContainer} intensity={40} blurRadius={10}>
          <Animated.View style={[styles.innerContainer, { transform: [{ rotate: rotateInterpolate }] }]} />
        </BlurView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -90,
    right: -130,
    width: '80%',
    height: '40%',
    borderRadius: 30,
    backgroundColor: 'transparent',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outsideContainer: {
    width: '70%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  blurContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  innerContainer: {
    width: '60%',
    height: '60%',
    backgroundColor: '#d6c1dd',
    borderRadius: 15,
    elevation: 20,
  },
});

export default BotSquare;
