import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, FlatList } from 'react-native';
import { Audio } from 'expo-av';
import BballLayout from '../basketball/BballLayout';
import VballLayout from '../volleyball/VballLayout';
import BadmintonLayout from '../badminton/BadmintonLayout';
import BilliardLayout from '../billiard/BilliardLayout';
import ExerciseLayout from '../exercise/ExerciseLayout';

const layouts = [
  { id: 'Bball', component: <BballLayout /> },
  { id: 'Vball', component: <VballLayout /> },
  { id: 'Badminton', component: <BadmintonLayout /> },
  { id: 'Billiard', component: <BilliardLayout /> },
  { id: 'Exercise', component: <ExerciseLayout /> },
];

const DashboardContent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [leftSwipeSound, setLeftSwipeSound] = useState();
  const [rightSwipeSound, setRightSound] = useState();
  const lastScrollX = useRef(0);

  useEffect(() => {
    async function loadSounds() {
      const { sound: leftSound } = await Audio.Sound.createAsync(
        require('../../assets/sound/swipeRight.mp3')
      );
      setLeftSwipeSound(leftSound);

      const { sound: rightSound } = await Audio.Sound.createAsync(
        require('../../assets/sound/swipeRight.mp3')
      );
      setRightSound(rightSound);
    }
    loadSounds();

    return () => {
      leftSwipeSound && leftSwipeSound.unloadAsync();
      rightSwipeSound && rightSwipeSound.unloadAsync();
    };
  }, []);

  const handleSwipeSound = async (direction) => {
    if (direction === 'left' && leftSwipeSound) {
      await leftSwipeSound.stopAsync();
      await leftSwipeSound.replayAsync();
    } else if (direction === 'right' && rightSwipeSound) {
      await rightSwipeSound.stopAsync();
      await rightSwipeSound.replayAsync();
    }
  };

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: true,
      listener: (event) => {
        const currentScrollX = event.nativeEvent.contentOffset.x;
        const minSwipeThreshold = 1;

        if (Math.abs(currentScrollX - lastScrollX.current) > minSwipeThreshold) {
          if (currentScrollX > lastScrollX.current) {
            handleSwipeSound('right');
          } else {
            handleSwipeSound('left');
          }
          lastScrollX.current = currentScrollX;
        }
      },
    }
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.component}
    </View>
  );

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={layouts}
        horizontal
        pagingEnabled
        bounce={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardContent;