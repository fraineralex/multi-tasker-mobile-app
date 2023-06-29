import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import axios from 'axios';
import HTML from 'react-native-render-html';
import { darkMode } from '../utils/theme/themeColors';

const stripHtmlTags = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '');
};

const WordPressNewsScreen = () => {
  const [siteLogo, setSiteLogo] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchSiteLogo();
    fetchLatestNews();
  }, []);

  const fetchSiteLogo = async () => {
    try {
      const response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/cnnespanol.cnn.com');
      setSiteLogo(response.data.icon.img);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLatestNews = async () => {
    try {
      const response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/cnnespanol.cnn.com/posts?number=3');
      setNews(response.data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewsLink = (link) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: darkMode.primary }]}>
      {siteLogo ? (
        <View>
          <Text style={styles.title}>CNN Español</Text>
          <Image source={{ uri: siteLogo }} style={styles.logo} />
        </View>
      ) : (
        <Text style={[styles.loadingText, { color: darkMode.secondary }]}>Loading site logo...</Text>
      )}

      {news.length > 0 ? (
        news.map((post) => (
          <TouchableOpacity
            key={post.ID}
            style={[styles.newsItem, { backgroundColor: darkMode.secondary }]}
            onPress={() => handleNewsLink(post.URL)}
          >
            <Text style={[styles.newsTitle, { color: darkMode.primary }]}>{post.title}</Text>
            <Text style={[styles.newsSummary, { color: darkMode.primary }]}>
              {stripHtmlTags(post.excerpt)}
            </Text>
            <TouchableOpacity onPress={() => handleNewsLink(post.URL)}>
              <Text style={[styles.visitLink, { color: darkMode.pink }]}>https://cnnespanol.cnn.com/this</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={[styles.loadingText, { color: darkMode.secondary }]}>Loading news...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: darkMode.secondary,
    margin: 15,
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius:20
  },
  loadingText: {
    fontSize: 18,
    marginBottom: 10,
  },
  newsItem: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsSummary: {
    fontSize: 16,
  },
  visitLink: {
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default WordPressNewsScreen;
