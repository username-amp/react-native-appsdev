import React, { useState, useRef, useLayoutEffect } from 'react';
import { View, StyleSheet, Animated, FlatList, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WaveSvg from './WaveSvg';
import { useFonts } from 'expo-font';


const items = [
  {
    id: '1',
    title: 'Elevate Your Fitness Journey',
    image: require('../assets/onboardingbball.png'),
  },
  {
    id: '2',
    title: 'Unlock a World of Sports & Training',
    image: require('../assets/onboardingvball.png'),
  },
  {
    id: '3',
    title: 'oin Our Active Sports Community',
    image: require('../assets/badminton.png'),
  },
  {
    id: '4',
    title: 'Discover Exciting Sports Adventures',

    image: require('../assets/onboardingbilliard.png'),
  },
];

const Onboarding = () => {
  const [loaded] = useFonts({
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
    'OpenSans-Regular': require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),

  })

  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const index = Math.floor(event.nativeEvent.contentOffset.x / 360);
        setCurrentIndex(index);
      },
    }
  );

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToRegister = () => {
    navigation.navigate('Register'); 
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={items}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <View style={styles.pagination}>
        {items.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [(index - 1) * 360, index * 360, (index + 1) * 360],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.dot, { opacity }]}
            />
          );
        })}
      </View>
      <WaveSvg />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={navigateToRegister}>
          <Text style={styles.buttonTextRegister}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={navigateToLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  itemContainer: {
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: '30%',
  },
  image: {
    width: '80%',
    height: 210,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
   fontFamily: 'OpenSans-Italic',
    marginTop: 20,
    textAlign: 'center',

   
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 190,
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#956AA1',
    marginHorizontal: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,

    width: '80%',
    alignSelf: 'center',
  },
  registerButton: {
    flex: 1,
    backgroundColor: '#956AA1',
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 30,
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#f2f3f7',
    paddingVertical: 15,
    borderRadius: 30,

  },
  buttonText: {
    color: '#956AA1',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonTextRegister: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default Onboarding;
