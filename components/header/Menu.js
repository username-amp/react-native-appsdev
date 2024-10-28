import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, SectionList, Pressable, Modal, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dashboard from '../../pages/Dashboard';

const { width } = Dimensions.get('window');

const displayNames = {
  InsideBball: 'Basketball',
  InsideVball: 'Volleyball',
  InsideBadminton: 'Badminton',
  InsideBilliard: 'Billiards',
  InsideExercise: 'Exercise',
  Help: 'Help?',
};

const DATA = [
  {
    title: 'Main',
    data: ['Home', 'About Us'],
  },
  {
    title: 'Sports',
    data: Object.keys(displayNames).filter(item => item !== 'Help'),
  },
];

const routeMap = {
  'Home': 'Dashboard',
  'About Us': 'AboutUs',
};

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
    const route = routeMap[item] || item;
    if (navigation) {
      navigation.navigate(route);
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
          <View style={styles.blueArea}>
            <Text style={styles.blueAreaText}>Menu</Text>
          </View>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={30} color="#000" />
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
          <View style={styles.footer}>
            <Pressable onPress={() => handleItemPress('Help')} style={styles.footerButton}>
              <Text style={styles.footerText}>{displayNames.Help}</Text>
            </Pressable>
          </View>
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
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
    paddingTop: 90,
    justifyContent: 'flex-start',
    position: 'relative',
  },
  blueArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e6d9ea',
    paddingVertical: 37,
    zIndex: 2,
    alignItems: 'center',
  },
  blueAreaText: {
    color: '#e6d9ea',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    position: 'absolute',
    zIndex: 3,
    left: 15,
    top: 40,
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
  footer: {
    paddingVertical: 10,
  },
  footerButton: {
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Menu;
