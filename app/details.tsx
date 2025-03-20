import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { WebView } from 'react-native-webview';


export default function DetailScreen() {
  const { name, description, image, longDescription, videoUrl } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: String(image) }} style={styles.image} />
      ) : (
        <Text style={styles.imagePlaceholder}>No image available</Text>
      )}
      <Text style={styles.title}>{name}</Text>
      

      {videoUrl && typeof videoUrl === 'string' && (
        <WebView
        source={{ uri: String(videoUrl) }}
        style={styles.video}
        allowsFullscreenVideo
        />
      ) }

      <View style={styles.scrollWrapper} >

      <ScrollView >
        <Text style={styles.longDescription} >

        {longDescription}
        </Text>
        
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  imagePlaceholder: { textAlign: 'center', color: '#888', marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 18, color: '#555' },
  video: {width: '100%', height: 200, marginBottom: 10},
  
  scrollWrapper: { flex: 1, maxHeight: 300, marginTop: 10 }, 
  longDescription: { fontSize: 16, color: '#555', textAlign: 'justify'},
});
