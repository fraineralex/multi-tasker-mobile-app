import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { darkMode } from '../utils/theme/themeColors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Multi Tasker App</Text>
      <Image source={{ uri: 'https://th.bing.com/th/id/R.0d4c1f2a1109ae167ca29fceae64e54f?rik=nN5y2TS0eqEgNg&pid=ImgRaw&r=0' }} style={styles.characterPhoto} alt="image" />
      <Text style={styles.text}>This is a multipurpose application in which you can perform completely different actions on each screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode.primary,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkMode.secondary,
    marginBottom: 20,
    textAlign: 'center'
  },
  characterPhoto: {
    width: 330,
    height: 330,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 30
  },
  text: {
    fontSize: 18,
    color: darkMode.secondary,
    textAlign: 'center',
    marginBottom: 17,
  },
});

export default Home;
