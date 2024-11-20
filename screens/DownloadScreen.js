import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DownloadScreen({ route, navigation }) {
  const { size } = route.params;
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YTI Downloader</Text>
      <Text style={styles.info}>Your Download will be starting soon</Text>
      <Text style={styles.countdown}>{countdown}</Text>
      <TouchableOpacity
        style={styles.downloadAgain}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.downloadAgainText}>Download Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 20 },
  info: { fontSize: 18, color: '#fff', textAlign: 'center', marginVertical: 10 },
  countdown: { fontSize: 40, color: '#ff0000', fontWeight: 'bold', marginVertical: 20 },
  downloadAgain: { backgroundColor: '#ff0000', padding: 15, borderRadius: 8, marginTop: 20 },
  downloadAgainText: { color: '#fff', fontWeight: 'bold' },
});
