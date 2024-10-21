import React, { useState, useEffect } from 'react';
import { View, Pressable, StyleSheet, Text, Modal, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from './Menu';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [slideAnim] = useState(new Animated.Value(500));

  const handleMenuPress = () => {
    setMenuVisible(true);
  };
  
  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const handleUserPress = async () => {
    const storedUsername = await AsyncStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    setUserModalVisible(true);
    slideInModal();
  };

  const slideInModal = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseUserModal = () => {
    Animated.spring(slideAnim, {
      toValue: 500,
      useNativeDriver: true,
    }).start(() => {
      setUserModalVisible(false);
    });
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

      {/* User Modal */}
      <Modal
        animationType="none"
        transparent={true}
        visible={userModalVisible}
        onRequestClose={handleCloseUserModal}
      >
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.modalContent, { transform: [{ translateX: slideAnim }] }]}>
            <Text style={styles.modalText}>Logged in as: {username}</Text>
            <Pressable onPress={handleCloseUserModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>

      <Menu visible={menuVisible} onClose={handleCloseMenu} />
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
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    width: '70%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#690981',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
