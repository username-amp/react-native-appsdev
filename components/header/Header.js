import { View, Pressable, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Header = () => {
  const handlePress = () => {
    console.log('Menu pressed'); // Add any navigation or functionality here
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} style={styles.iconButton}>
        {/* Wrap the icon inside a Text component */}
        <Text>
          <Icon name="bars" size={24} color="#fff" />
        </Text>
      </Pressable>

      <Pressable onPress={handlePress} style={styles.iconButton}>
        {/* Wrap the icon inside a Text component */}
        <Text>
          <Icon name="user" size={24} color="#fff" />
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E90FF',
    padding: 15, // Adjust padding if needed
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Adjust the layout
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  iconButton: {
    padding: 10, // Add some padding for better touch experience
  },
});

export default Header;
