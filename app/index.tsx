import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { attractions } from './data/attractions';
import { styles } from './styles/styles';
import { Navbar } from '@/components/Navbar';






export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Navbar/>
      <Text style={styles.title}>MAZATLAN ATTRACTIONS</Text>
      <FlatList
        data={attractions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.card}
            onPress={() => router.push({ pathname: '/details', params: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


