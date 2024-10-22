import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View, TouchableOpacity, Text, TouchableWithoutFeedback, Image } from 'react-native';

const AnimatedPopup = () => {
  const [visible, setVisible] = useState(true);
  const scale = new Animated.Value(0);

  const animatePopup = () => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (visible) {
      animatePopup();
    }
  }, [visible]);

  const closePopup = () => {
    Animated.timing(scale, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });
  };

  if (!visible) return null;

  return (
    <View style={styles.popup}>
      <TouchableWithoutFeedback onPress={closePopup}>
        <View style={styles.overlay}>

        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.content,
          {
            transform: [{ scale }],
          },
        ]}
      >
        <TouchableOpacity style={styles.closeButton} onPress={closePopup}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      <Image source={require('../../assets/indicator.jpg')} style={{ width: 150, height: 300, marginBottom: 10, borderRadius: 10, }} />
      <Image source={require('../../assets/swiper.gif')} style={{ width: 100, height: 100, borderRadius: 10, position: 'absolute', bottom: 200 }} />
        <Text style={styles.contentText}>You can swipe this</Text>
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
    width: 300,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 20,
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
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AnimatedPopup;
