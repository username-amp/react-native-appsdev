import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExtraPart = () => {
  const navigation = useNavigation();

  const handleRegisterPress = () => {
    navigation.navigate('Login');
    console.log('Login link clicked!');
  };

  return (
    <View style={styles.container}>
      <Text>Already have an account? </Text>
      <Pressable onPress={handleRegisterPress}>
        <Text style={styles.link}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: 20,
    elevation: 20,
    borderColor: '#ddd', 
    borderWidth: 1,
  },
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontFamily: 'OpenSans-Regular',
  },
});

export default ExtraPart;
