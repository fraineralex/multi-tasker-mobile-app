import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';

const ContactMeScreen = () => {
  const fullName = 'Frainer Alexander Encarnación';
  const email = 'frainerdeveloper@gmail.com';
  const linkedIn = 'in/fraineralex';
  const gitHub = 'fraineralex';
  const photo = { uri: 'https://unavatar.io/fraineralex' };

  const handleGitHubPress = () => {
    const githubURL = `https://github.com/${gitHub}`;
    Linking.openURL(githubURL);
  };

  const handleLinkedInPress = () => {
    const linkedinURL = `https://linkedin.com/${linkedIn}`;
    Linking.openURL(linkedinURL);
  };

  const handleEmailPress = () => {
    const emailURL = `mailto:${email}`;
    Linking.openURL(emailURL);
  };

  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.profilePhoto} />
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.contactText}>👨🏻‍💻 Software Engineer</Text>
      <Text style={styles.contactText}>🇩🇴 Dominican</Text>

      <View style={styles.contactContainer}>
        <TouchableOpacity style={styles.contactItem} onPress={handleGitHubPress}>
          <Image
            source={require('../static/src/img/github.png')}
            style={styles.contactIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={handleLinkedInPress}>
          <Image
            source={require('../static/src/img/linkedin.png')}
            style={styles.contactIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
          <Image
            source={require('../static/src/img/email.png')}
            style={styles.contactIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkMode.secondary,
    marginBottom: 10,
  },
  contactContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  contactIcon: {
    width: 64,
    height: 64,
    marginRight: -5,
  },
  contactText: {
    fontSize: 16,
    color: darkMode.secondary,
  },
});

export default ContactMeScreen;
