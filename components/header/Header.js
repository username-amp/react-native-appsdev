import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu from './Menu';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuPress = () => {
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleMenuPress} style={styles.iconButton}>
        <Icon name="bars" size={24} color="#fff" />
      </Pressable>

      <Text style={styles.headerTitle}>My App</Text>

      <Pressable onPress={handleMenuPress} style={styles.iconButton}>
        <Icon name="user" size={24} color="#fff" />
      </Pressable>

      <Menu visible={menuVisible} onClose={handleCloseMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6d9ea',
    padding: 15,
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
});

export default Header;
