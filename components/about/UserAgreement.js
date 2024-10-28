import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UserAgreement = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>User Agreement</Text>
          <Text style={styles.welcomeText}>
            Welcome to our app! Make yourself comfortable and try out different physical education activities while you’re here, but please follow our rules. In other words, if you use any of our Services, you agree to these Terms and our Privacy Policy.
          </Text>
          <Text style={styles.agreementText}>
            If you do not agree to these Terms, please do not use the App.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
   
    borderRadius: 10,
    padding: 20,

    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    color: '#555',
    textAlign: 'center',
  },
  agreementText: {
    fontSize: 16,
    color: '#d9534f',
    textAlign: 'center',
  },
});

export default UserAgreement;
