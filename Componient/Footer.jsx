import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={30} color="#fff" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Post')}>
        <Ionicons name="add-circle" size={30} color="#fff" />
        <Text style={styles.footerText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    zIndex: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Footer;
