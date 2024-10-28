import { View, Text, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterPart = () => {
    const navigation = useNavigation();
  const handleRegisterPress = () => {
    navigation.navigate(`Register`)
    console.log('Register link clicked!');
  };

  return (
    <View style={styles.container}>
      <Text>Do you have an account? </Text>
      <Pressable onPress={handleRegisterPress}>
        <Text style={styles.link}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
  
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontFamily: 'OpenSans-Regular',
  },
});

export default RegisterPart;
