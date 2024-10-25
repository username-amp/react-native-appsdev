import React, { useState, useEffect } from 'react';
import { View, Pressable, StyleSheet, Text, Modal, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from './Menu';
import { Audio } from 'expo-av';

const Header = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [slideAnim] = useState(new Animated.Value(-500)); // Start off-screen at the top
  const [menuSound, setMenuSound] = useState();
  const [userSound, setUserSound] = useState(); // New state for user sound

  useEffect(() => {
    const loadSounds = async () => {
      const { sound: menuSound } = await Audio.Sound.createAsync(
        require('../../assets/sound/menuPopup.mp3')
      );
      setMenuSound(menuSound);

      const { sound: userSound } = await Audio.Sound.createAsync( // Load user sound
        require('../../assets/sound/menuPopup.mp3') // Replace with the actual path to your sound file
      );
      setUserSound(userSound);
    };

    loadSounds();

    return () => {
      menuSound && menuSound.unloadAsync();
      userSound && userSound.unloadAsync(); // Unload user sound
    };
  }, []);

  const handleMenuPress = async () => {
    if (menuSound) {
      await menuSound.replayAsync();
    }
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const handleUserPress = async () => {
    if (userSound) {
      await userSound.replayAsync(); // Play user sound
    }
    const storedUsername = await AsyncStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    setUserModalVisible(true);
    slideInModal();
  };

  const slideInModal = () => {
    Animated.spring(slideAnim, {
      toValue: 0, // Move to the center
      useNativeDriver: true,
    }).start();
  };

  const handleCloseUserModal = () => {
    Animated.spring(slideAnim, {
      toValue: -500, // Slide back up off-screen
      useNativeDriver: true,
    }).start(() => {
      setUserModalVisible(false);
    });
  };

  const handleLogout = async () => {
    navigation.navigate('Login');
    handleCloseUserModal(); // Close the modal after logout
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleMenuPress} style={styles.iconButton}>
        <Icon name="bars" size={24} color="#fff" />
      </Pressable>

      <Text style={styles.headerTitle}>My App</Text>

      <Pressable onPress={handleUserPress} style={styles.iconButton}>
        <Icon name="user" size={24} color="#fff" />
      </Pressable>

      <Modal
        animationType="none"
        transparent={true}
        visible={userModalVisible}
        onRequestClose={handleCloseUserModal}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCloseUserModal}>
          <Animated.View style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}>
            <Text style={styles.modalText}>Logged in as: {username}</Text>
            <Pressable onPress={handleLogout} style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </Pressable>
          </Animated.View>
        </Pressable>
      </Modal>

      <Menu visible={menuVisible} onClose={handleCloseMenu} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6d9ea',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  iconButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: '50%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#690981',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
