import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import BackHeader from '../components/header/BackHeader';

const PrivacyPolicy = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <View>
            <BackHeader />
            <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.heading}>Privacy Policy</Text>
                        <Text style={styles.paragraph}>
                            This application respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our app.
                        </Text>
                    </View>
                <Text style={styles.subheading}>I. Information We Collect</Text>
                <Text style={styles.paragraph}>
                    Personal Information: username, email address, and password. We may use your personal information to send you important notifications and updates.
                </Text>

                <Text style={styles.subheading}>II. Data Sharing</Text>
                <Text style={styles.paragraph}>
                    We may share your personal information with Google. We may engage third-party service providers to assist us in delivering our services, such as data storage and customer support.
                </Text>

                <Text style={styles.subheading}>III. Data Security</Text>
                <Text style={styles.paragraph}>
                    We implement reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
                </Text>

                <Text style={styles.subheading}>IV. Your Rights</Text>
                <Text style={styles.paragraph}>
                    You may have certain rights regarding your personal information, including the right to:
                </Text>
                <Text style={styles.listItem}>• Installing and Uninstalling of the app will delete every information that the user had input.</Text>
                <Text style={styles.listItem}>• Ability to view sports, exercises, and their information.</Text>
                <Text style={styles.listItem}>• Ability to use for making PE content-related socials using our App.</Text>

                <Text style={styles.subheading}>V. Privacy Policy Modifications</Text>
                <Text style={styles.paragraph}>
                    We reserve the right to modify the policies written in this app at any time for future added conditions.
                </Text>

                <Text style={styles.subheading}>VI. Contact Us</Text>
                <Text style={styles.paragraph}>
                    If you have any questions or concerns, please contact us via direct email. Please note that while we strive to respond to inquiries promptly, we cannot guarantee a specific response time.
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 70,
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

export default PrivacyPolicy;
