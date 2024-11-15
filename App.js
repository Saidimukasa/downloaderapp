import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  const handleNavPress = (screenName) => {
    console.log(`Navigating to ${screenName}`);
    // Add your navigation logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      
        {/* Navbar */}
        <View style={styles.navbar}>
        <Text>YTI downloader</Text>
          <TouchableOpacity onPress={() => handleNavPress('Home')}>
            {/* <Text style={styles.navItem}>Home</Text> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavPress('About')}>
            {/* <Text style={styles.navItem}>About</Text> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavPress('Contact')}>
            {/* <Text style={styles.navItem}>Contact</Text> */}
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TextInput 
          style={styles.searchBar} 
          placeholder="Search here..." 
        />

        {/* Content */}
        <View style={styles.content}>
          <Text>YTI downloader</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    backgroundColor: '#f8f9fa',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navItem: {
    fontSize: 18,
    color: '#007bff',
  },
  searchBar: {
    width: '80%',
    height: 40,
    marginVertical: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
