import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const darkMode = {
  primary: '#FFFFFF',
  secondary: '#000000',
  tabActive: '#FFFFFF',
  tabInactive: '#CCCCCC',
  headerText: '#FFFFFF',
  headerBackground: '#000000',
  blue: '#4287f5',
  pink: '#ff1493',
};

const WeatherScreen = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=e1d956d66f0f4d30bde232312232806&q=Dominican Republic');
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {weather ? (
        <>
          <Text style={[styles.location, styles.locationDark]}>{weather.location.name}</Text>
          <Text style={[styles.temp, styles.tempDark]}>{weather.current.temp_c}°C</Text>
          <Text style={[styles.condition, styles.conditionDark]}>{weather.current.condition.text}</Text>
        </>
      ) : (
        <Text style={[styles.loadingText, styles.loadingTextDark]}>Loading weather...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode.secondary,
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: darkMode.primary,
  },
  locationDark: {
    color: darkMode.primary,
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    color: darkMode.primary,
  },
  tempDark: {
    color: darkMode.primary,
  },
  condition: {
    fontSize: 18,
    color: darkMode.primary,
  },
  conditionDark: {
    color: darkMode.primary,
  },
  loadingText: {
    fontSize: 18,
    color: darkMode.primary,
  },
  loadingTextDark: {
    color: darkMode.primary,
  },
});

export default WeatherScreen;
