import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Linking, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';

const darkMode = {
  primary: '#FFFFFF',
  secondary: '#000000',
  tabActive: '#FFFFFF',
  tabInactive: '#CCCCCC',
  headerText: '#FFFFFF',
  headerBackground: '#000000',
  blue: '#4287f5',
  pink: '#ff1493'
};

const UniversitySearchScreen = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const searchUniversities = async () => {
    try {
      Keyboard.dismiss()
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`);
      setUniversities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderUniversityItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.universityItem, styles.universityItemDark]}
        onPress={() => Linking.openURL(item.web_pages[0])}
      >
        <Text style={[styles.universityName, styles.universityNameDark]}>{item.name}</Text>
        <Text style={[styles.universityDomain, styles.universityDomainDark]}>{item.domains[0]}</Text>
        <Text style={[styles.universityWebsite, styles.universityWebsiteDark]}>
          {item.web_pages[0]}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Text style={[styles.title, styles.titleDark]}>University Name</Text>
        <TextInput
          style={[styles.input, styles.inputDark]}
          placeholder="Enter a country"
          value={country}
          onChangeText={setCountry}
          placeholderTextColor={darkMode.secondary}
        />
        <TouchableOpacity style={[styles.button, styles.buttonDark]} onPress={searchUniversities}>
          <Text style={[styles.buttonText, styles.buttonTextDark]}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={universities}
          keyExtractor={(item) => item.name}
          renderItem={renderUniversityItem}
          style={styles.universityList}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode.secondary,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: darkMode.primary,
  },
  titleDark: {
    color: darkMode.primary,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: darkMode.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    color: darkMode.primary,
  },
  inputDark: {
    color: darkMode.primary,
    borderColor: darkMode.primary,
  },
  button: {
    backgroundColor: darkMode.blue,
    padding: 10,
    borderRadius: 5,
  },
  buttonDark: {
    backgroundColor: darkMode.pink,
  },
  buttonText: {
    color: darkMode.secondary,
  },
  buttonTextDark: {
    color: darkMode.secondary,
  },
  universityList: {
    width: '80%',
    marginTop: 20,
  },
  universityItem: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: darkMode.secondary,
  },
  universityItemDark: {
    backgroundColor: darkMode.primary,
  },
  universityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: darkMode.primary,
  },
  universityNameDark: {
    color: darkMode.secondary,
  },
  universityDomain: {
    fontSize: 14,
    color: darkMode.tabInactive,
  },
  universityDomainDark: {
    color: darkMode.tabInactive,
  },
  universityWebsite: {
    fontSize: 14,
    color: darkMode.blue,
  },
  universityWebsiteDark: {
    color: darkMode.pink,
  },
});

export default UniversitySearchScreen;
