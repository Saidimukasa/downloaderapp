import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const sizes = ['480x480', '720x720', '1080x1080', '1440x1440'];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* <Text style={styles.logo}>YTI Downloader</Text> */}
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>YTI Downloader</Text>
        <Text style={styles.subtitle}>
          Free, Fast, and Easy video Downloader – Download Your Favorite Videos Now!
        </Text>
      </View>

      {/* Input and Button Section */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Paste video URL"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Feature Section */}
      <View style={styles.featureRow}>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>High-speed downloading</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>No registration required</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>Secure downloading</Text>
        </View>
      </View>

      {/* Thumbnail and Buttons */}
      <View style={styles.thumbnailRow}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x150' }} // Replace with your image
          style={styles.thumbnail}
        />
        <View style={styles.downloadButtonsColumn}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={styles.downloadButton}
              onPress={() => navigation.navigate('Download', { size })}
            >
              <Text style={styles.downloadButtonText}>Size {size} Download</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Download Again Button */}
      <TouchableOpacity style={styles.downloadAgain}>
        <Text style={styles.downloadAgainText}>Download Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      paddingTop:50
      
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      
    },
    logo: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ff0000',
      textAlign: 'center',
    },
    titleSection: {
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 14,
      color: '#555',
      textAlign: 'center',
      marginHorizontal: 20,
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    input: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      color: '#000',
      padding: 10,
      borderRadius: 8,
      marginRight: 10,
    },
    searchButton: {
      backgroundColor: '#ff0000',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
    },
    searchButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    featureRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    featureItem: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    featureText: {
      fontSize: 12,
      color: '#555',
      textAlign: 'center',
    },
    thumbnail: {
      width: '100%',
      height: 150,
      borderRadius: 10,
      marginBottom: 20,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around', // Ensures even spacing between buttons
      marginTop: 10,
    },
    downloadButton: {
      backgroundColor: '#ff0000',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      
    },
    downloadButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 12,
    },
    downloadAgain: {
      backgroundColor: '#ff0000',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
    },
    downloadAgainText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
    