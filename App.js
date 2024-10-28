import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Post from './Post';

export default function App() {
  const posts = [
    {
      caption: 'image 1',
      url: require('./assets/imagen 1.jpg'),
    },
    {
      caption: 'image 2',
      url: require('./assets/imagen 2.jpg'),
    },
    {
      caption: 'image 3',
      url: require('./assets/imagen 3.jpg'),
    },
    {
      caption: 'image 4',
      url: require('./assets/imagen 4.jpg'),
    },
    {
      caption: 'image 5',
      url: require('./assets/imagen 5.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
});
