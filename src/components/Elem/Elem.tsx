/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth'; // getAuth
import Loader from '../Loader/Loader';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import { initializeApp } from 'firebase/app';
// import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Section} from '../Section/Section';
import {HomeScreenNavigationProp} from '../../screens/HomeScreen';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { FirebaseAuthTypes } from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '139387485373-gge9nt41v8dulo7k78vqmrl5f9d0mv1d.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

const API_KEY = '74240d0d45984f26a208276b1614598a';

export interface Article {
  title: string;
  description: string;
  url: string; // Assuming 'url' is the unique identifier for each article
  urlToImage: string;
  content: string;
}

export const Elem = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  function onAuthStateChanged(user2: any) {
    const data = auth().currentUser;
    console.log(user2, data, 'authlistener');
    setUser(user2);
    if (initializing) {
      setInitializing(false);
    }
  }

  async function signOut() {
    try {
      console.log('sgned out');
      await auth().signOut();
      await GoogleSignin.signOut();
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const usr = auth().currentUser;

    console.log(usr);

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // unsubscribe on unmount
  }, []);

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
      );
      const json = await response.json();
      console.log(Object.keys(json.articles['0']), 'json');
      setArticles(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    console.log(articles.length, 'articles');
  }, [articles]);

  const artcl = ({item}: {item: Article}) => {
    return (
      <View style={styles.articleContainer}>
        {item.urlToImage ? (
          <Image source={{uri: item.urlToImage}} style={styles.image} />
        ) : null}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsItem', { newsItem: item } as any)}
          key={item.url}
          style={{
            backgroundColor: '#7b96bc',
            padding: '2%',
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>
            Read the news
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (initializing) return <Loader />;

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Section title="">
        <Text>Welcome !</Text>
        <View style={styles.signOutContainer}>
          <TouchableOpacity onPress={signOut} style={styles.signOutButton}>
            <Text style={styles.signOutText}>Sign out</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={articles}
          renderItem={artcl}
          keyExtractor={item => item.url}
          style={styles.flatListContent}
        />
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full screen height
    padding: 10,
  },
  signOutContainer: {
    marginBottom: 10,
  },
  signOutButton: {
    backgroundColor: '#7b96bc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  signOutText: {
    color: 'white',
    textAlign: 'center',
  },
  articleContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
  flatListContent: {
    paddingBottom: 20,
    marginBottom: 40, // Adds padding to the bottom of the FlatList to avoid content being cut off
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});
