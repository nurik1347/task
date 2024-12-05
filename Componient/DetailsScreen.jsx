import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import axios from 'axios';

const DetailsScreen = ({ route }) => {
  const { postId } = route.params; // Extract postId from route params
  const [post, setPost] = useState(null); // State to store post data
  const [loading, setLoading] = useState(true); // Loading state for fetching data
  const [error, setError] = useState(null); // Error state for handling API errors

  useEffect(() => {
    // Fetch post details when component mounts
    axios
      .get(`https://unversty-2.onrender.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false); // Data fetched successfully, stop loading
      })
      .catch((error) => {
        setError('Error fetching post details'); // Set error message if API fails
        setLoading(false); // Stop loading in case of error
      });
  }, [postId]); // Dependency on postId to refetch if it changes

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {post ? (
        <View style={styles.card}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.description}>{post.description}</Text>
          <Text style={styles.datetime}>{post.datetime}</Text>
          <Text style={styles.likes}>Likes: {post.likes}</Text>
        </View>
      ) : (
        <Text style={styles.errorText}>Post not found.</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default DetailsScreen;
