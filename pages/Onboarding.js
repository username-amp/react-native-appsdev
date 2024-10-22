import React, { useState, useRef, useLayoutEffect } from 'react';
import { View, StyleSheet, Animated, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const items = [
  {
    id: '1',
    title: 'Welcome to Our App',
    description: 'Discover a world of sports and fitness opportunities. Join our community and unlock a world of possibilities.',
    image: require('../assets/bball.png'),
  },
  {
    id: '2',
    title: 'Explore the World of Sports',
    description: 'Discover a world of sports and fitness opportunities. Join our community and unlock a world of possibilities.',
    image: require('../assets/vball.png'),
  },
  {
    id: '3',
    title: 'Join Our Community',
    description: 'Discover a world of sports and fitness opportunities. Join our community and unlock a world of possibilities.',
    image: require('../assets/badminton.png'),
  },
  {
    id: '4',
    title: 'Discover New Adventures',
    description: 'Discover a world of sports and fitness opportunities. Join our community and unlock a world of possibilities.',
    image: require('../assets/billiard.png'),
  },
];

const Onboarding = () => {
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={navigateToRegister}>
          <Text style={styles.buttonTextRegister}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={navigateToLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1F7',
    justifyContent: 'center',
  },
  itemContainer: {
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 140,
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#690981',
    marginHorizontal: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
  },
  registerButton: {
    flex: 1,
    backgroundColor: '#690981',
    paddingVertical: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#e6d9ea',
    paddingVertical: 15,
    borderRadius: 5,
    marginLeft: 10,

  },
  buttonText: {
    color: '#690981',
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
