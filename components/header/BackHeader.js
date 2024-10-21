import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const BackHeader = ({ title }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleBackPress} style={styles.iconButton}>
        <Icon name="arrow-left" size={24} color="#000" />
      </Pressable>

      {title && <Text style={styles.headerTitle}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // backgroundColor: '#4a4a4a',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
     
    paddingTop: 60,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
   // elevation: 5,
  },
  iconButton: {
   // padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  headerTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
   // marginLeft: 15, 
  },
});

export default BackHeader;
