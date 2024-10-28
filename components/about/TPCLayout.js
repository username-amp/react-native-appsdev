import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const TPCLayout = () => {
  const navigation = useNavigation();

  const termsPressed = () => {
    navigation.navigate('TermsOfService');
  };

  const privacyPressed = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const cookiePressed = () => {
    navigation.navigate('CookiePolicy');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.termsButton} onPress={termsPressed}>
          <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
            Terms of Service
          </Text>
          <Icon name="chevron-forward" size={20} color="black" style={styles.icon} />
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.privacyButton} onPress={privacyPressed}>
          <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
            Privacy Policy
          </Text>
          <Icon name="chevron-forward" size={20} color="black" style={styles.icon} />
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.cookieButton} onPress={cookiePressed}>
          <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
            Cookie Policy
          </Text>
          <Icon name="chevron-forward" size={20} color="black" style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  termsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#f2e1f8',
    width: '70%',
    borderRadius: 10,
  },
  privacyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#d8c6de',
    width: '70%',
    borderRadius: 10,
  },
  cookieButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#ceb5d6',
    width: '70%',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: 'black',
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
});

export default TPCLayout;
