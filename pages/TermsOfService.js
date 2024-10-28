import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import BackHeader from '../components/header/BackHeader';

const TermsOfService = () => {
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
          <Text style={styles.heading}>Terms of Service</Text>
          <Text style={styles.paragraph}>
            By using this application, you agree to the following terms. Please read them carefully.
          </Text>
        </View>

        <Text style={styles.subheading}>I. User Account</Text>
        <Text style={styles.paragraph}>
          You are solely responsible for your use of the application and any information or data entered. You agree to provide accurate and up-to-date information.
        </Text>

        <Text style={styles.subheading}>II. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          In no event shall this application be liable for any direct, indirect, incidental, or consequential damages arising out of or in connection with your use of the application or any information contained therein.
        </Text>

        <Text style={styles.subheading}>III. Modification to Terms</Text>
        <Text style={styles.paragraph}>
          We reserve the right to modify these Terms and Conditions at any time for future added conditions.
        </Text>

        <Text style={styles.subheading}>IV. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions or concerns, please contact us via direct email. Please note that while we strive to respond to inquiries promptly, we cannot guarantee a specific response time.
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
  listItem: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 5,
  },
});

export default TermsOfService;
