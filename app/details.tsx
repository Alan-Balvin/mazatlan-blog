import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailScreen() {
  const { name, description, image, longDescription } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: String(image) }} style={styles.image} />
      ) : (
        <Text style={styles.imagePlaceholder}>No image available</Text>
      )}
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.longDescription}>{longDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  imagePlaceholder: { textAlign: 'center', color: '#888', marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 18, color: '#555' },
  longDescription: { fontSize: 18, color: '#555'},
});
