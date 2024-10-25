// AnimatedPoro.js
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const AnimatedPoro = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.9, { stiffness: 200 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { stiffness: 200 });
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <AnimatedSvg width={150} height={150} style={animatedStyle} viewBox="0 0 150 150">
        {/* Body */}
        <Path
          d="M75 90 Q 40 90 50 60 Q 60 40 90 40 Q 120 40 130 60 Q 140 90 75 90 Z"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="2"
        />
        {/* Horns */}
        <Path d="M50 45 Q 30 30 35 55" fill="none" stroke="#A0522D" strokeWidth="5" />
        <Path d="M100 45 Q 120 30 115 55" fill="none" stroke="#A0522D" strokeWidth="5" />
        {/* Eyes */}
        <Circle cx="60" cy="60" r="5" fill="#000" />
        <Circle cx="90" cy="60" r="5" fill="#000" />
        {/* Tongue */}
        <Path
          d="M70 80 Q 75 95 80 80"
          fill="#ff69b4"
          stroke="#ff69b4"
          strokeWidth="2"
        />
      </AnimatedSvg>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedPoro;
