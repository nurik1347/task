import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';

const PostScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handlePostSubmit = async () => {
    try {
      const club_id = "673f2ed39d84c5fad65b9ff5";  // Example club ID
      const datetime = new Date().toLocaleTimeString();  // Current time

      // Creating the post data
      const postData = {
        title,
        description,
        image,
        datetime,
        club_id,
        likes: 0,  // Default likes
        userid: "6736489a0ef973f3f1448e86", // Example user ID
      };

      // Sending the data to the API
      const response = await axios.post('https://unversty-2.onrender.com/posts', postData, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 5000, // Timeout after 5 seconds
      });

      console.log('Post created successfully:', response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error Response:', error.response.status);
        console.error('Error Data:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error Request:', error.request);
      } else {
        // Something else triggered the error
        console.error('Error Message:', error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create a New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Post" onPress={handlePostSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default PostScreen;
