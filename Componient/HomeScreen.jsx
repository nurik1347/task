import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity, RefreshControl } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://unversty-2.onrender.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchPosts()
      .finally(() => setRefreshing(false));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.datetime}>{item.datetime}</Text>
        <Text style={styles.likes}>Likes: {item.likes}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details', { postId: item._id })}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    backgroundColor: '#fff',
    marginTop: 4
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  datetime: {
    fontSize: 12,
    color: '#777',
    marginTop: 10,
  },
  likes: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff6347',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
