import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import BackHeader from '../components/header/BackHeader';

const CookiePolicy = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <BackHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Cookie Policy</Text>
          <Text style={styles.paragraph}>
            By using the App, you consent to the use of cookies as described in this policy. If you have questions or concerns, please reach out to us via email.
          </Text>
        </View>

        <Text style={styles.subheading}>I. Essential Cookies</Text>
        <Text style={styles.paragraph}>
          These cookies are necessary for the App to function properly. They enable core features, such as security, account, and authentication.
        </Text>

        <Text style={styles.subheading}>II. Persistent Cookies</Text>
        <Text style={styles.paragraph}>
          Enhances user experience by storing information like login credentials and preferences.
        </Text>

        <Text style={styles.subheading}>III. First-Party Cookies</Text>
        <Text style={styles.paragraph}>
          The cookies are created and stored by the app itself rather than by third-party services. Using the app’s cookies improves user experience and maintains app functionality.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  innerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#690981',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
});

export default CookiePolicy;
