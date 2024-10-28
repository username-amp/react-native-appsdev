import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Animated, StyleSheet, View, TouchableOpacity, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Svg, { Polygon, ClipPath, Defs, Rect } from 'react-native-svg';
import WaveSvg from '../dashboard/WaveSvg';
import { useFonts } from 'expo-font';

const AnimatedPopup = () => {
  const [loaded] = useFonts({
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Italic': require('../../assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
    'OpenSans-Regular': require('../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'OpenSans-Italic': require('../../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
  });

  const animatedText = useRef(new Animated.Value(0)).current;
  const wavePosition = useRef(new Animated.Value(500)).current;
  const [visible, setVisible] = useState(true);
  const scale = useRef(new Animated.Value(0)).current;

  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Swipe to explore different sports! Discover your favorites and see whats happening in each one';
  const [startTyping, setStartTyping] = useState(false);
  const [showSvg, setShowSvg] = useState(false);
  const [showRect, setShowRect] = useState(false);

  const animatePopup = useCallback(() => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(wavePosition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setStartTyping(true);
      setTimeout(() => {
        setShowSvg(true);
        setTimeout(() => {
          setShowRect(true);
        }, 100);
      }, 100);
    });
  }, [scale, wavePosition]);

  useEffect(() => {
    if (visible) {
      animatePopup();
    }
  }, [visible, animatePopup]);

  useEffect(() => {
    Animated.timing(animatedText, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    return () => {
      animatedText.setValue(0);
    };
  }, [animatedText]);

  // Typewriter effect logic
  useEffect(() => {
    if (startTyping && displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[displayedText.length]);
      }, 20);

      return () => clearTimeout(timer);
    }
  }, [displayedText, startTyping]);
  const closePopup = useCallback(() => {
    Animated.timing(wavePosition, {
      toValue: 500,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scale, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
      });
    });
  }, [scale, wavePosition]);
  

  if (!loaded || !visible) return null;

  return (
    <View style={styles.popup}>
      <TouchableWithoutFeedback onPress={closePopup}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.content, { transform: [{ scale }] }]}>
        
        <Image
          source={require('../../assets/indicator.jpg')}
          style={{ width: 150, height: 300, marginBottom: 10, borderRadius: 10 }}
        />
        <Image
          source={require('../../assets/swiper.gif')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            position: 'absolute',
            top: 100,
           
          }}
        />
        <Animated.View style={[styles.contentContainer, { marginBottom: 100 }]}>
          <Svg height="100" width="250">
            <Defs>
              <ClipPath id="clip">
                <Polygon points="0,0 250,0 250,75 188,75 188,100 125,75 0,75" />
              </ClipPath>
            </Defs>
            {showRect && (
              <Rect width="250" height="100" fill="white" clipPath="url(#clip)" />
            )}
            {showSvg && (
              <Animated.Text
                style={[
                  styles.svgText,
                  { transform: [{ scaleX: animatedText }] },
                ]}
              >
                {displayedText}
              </Animated.Text>
            )}
          </Svg>
        </Animated.View>
      </Animated.View>
      <Animated.View style={{ transform: [{ translateX: wavePosition }] }}>
        <WaveSvg />
       
      </Animated.View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButtonText: {
    fontSize: 18,
    fontFamily: 'OpenSans-Italic',
  },
  contentContainer: {
    alignItems: 'center',
  },
  svgText: {
    x: 125,
    y: 30,
    textAnchor: 'middle',
    alignmentBaseline: 'middle',
    fontSize: 14,
    fill: 'black',
    fontFamily: 'OpenSans-Regular',
    padding: 10,
  },
});

export default AnimatedPopup;
