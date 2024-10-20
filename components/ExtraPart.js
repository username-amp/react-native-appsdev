import { View, StyleSheet, Text, Platform, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExtraPart = () => {
    const navigation = useNavigation();

    const handleRegisterPress = () => {
        navigation.navigate(`Login`)
        console.log('Login link clicked!');
      };
    
  return (
    <View style={styles.container}>
     <Text>Already have an account? </Text>
      <Pressable onPress={handleRegisterPress}>
        <Text style={styles.link}>Login</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 20
    },

    ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.3,
          shadowRadius: 20,
        },
        android: {
          elevation: 10,
        },
      }),

      link: {
        color: '#1E90FF',
        textDecorationLine: 'underline',
        marginLeft: 5,
      },
})

export default ExtraPart