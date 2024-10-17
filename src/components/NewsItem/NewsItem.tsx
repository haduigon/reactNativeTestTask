import React, {
  // useEffect, useState
} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Article } from '../Elem/Elem';

function NewsItem({ route }: any) {
  const { newsItem }: { newsItem: Article } = route.params;

  // console.log(newsItem.url, 'newsItem')
  return (
    <View style={styles.articleContainer}>
      <Text>The news:</Text>
      {newsItem.urlToImage ? (
          <Image source={{uri: newsItem.urlToImage}} style={styles.image} />
        ) : null}
      <Text style={styles.title}>{newsItem.title}</Text>
      <Text style={styles.description}>{newsItem.content}</Text>
    </View>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});
