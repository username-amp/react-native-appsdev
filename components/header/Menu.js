import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, SectionList, Pressable, Modal, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const displayNames = {
  InsideBball: 'Basketball',
  InsideVball: 'Volleyball',
  InsideBadminton: 'Badminton',
  InsideBilliard: 'Billiards',
  InsideExercise: 'Exercise',
};

const DATA = [
  {
    title: 'Main',
    data: ['About Us'],
  },
  {
    title: 'Sports',
    data: Object.keys(displayNames),
  },
];

const Menu = ({ visible, onClose, navigation }) => {
  const translateX = useRef(new Animated.Value(-width)).current;
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(translateX, {
        toValue: -width,
        useNativeDriver: true,
      }).start(() => {
        setIsVisible(false);
        onClose();
      });
    }
  }, [visible]);

  const handleItemPress = (item) => {
    onClose();
    if (navigation) {
      navigation.navigate(item);
    } else {
      console.error("Navigation prop is undefined");
    }
  };
  

  if (!isVisible) return null;

  return (
    <Modal transparent={true} visible={isVisible} animationType="none">
      <View style={styles.overlay}>
        
        <Pressable style={styles.closeOverlay} onPress={onClose} />
        
        <Animated.View style={[styles.menuContainer, { transform: [{ translateX }] }]}>
          
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={24} color="#000" />
          </Pressable>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleItemPress(item)}>
                <Text style={styles.item}>{displayNames[item] || item}</Text>
              </Pressable>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menuContainer: {
    width: '50%',
    maxHeight: height * 0.75,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default Menu;
