import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated, FlatList } from 'react-native';
import BballLayout from '../basketball/BballLayout';
import VballLayout from '../volleyball/VballLayout';
import BadmintonLayout from '../badminton/BadmintonLayout'; // Import the new layout
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
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
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
