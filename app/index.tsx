import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { attractions } from './data/attractions';
import { styles } from './styles/styles';




const menuOptions = [
  { id: '1', title: 'Home', route: '/' },
  { id: '2', title: 'Attractions', route: '/attractions' },
  { id: '3', title: 'Restaurants', route: '/restaurants' },
  { id: '4', title: 'Beaches', route: '/beaches' },
  { id: '5', title: 'Events', route: '/events' },
  { id: '6', title: 'Gallery', route: '/gallery' },
  { id: '7', title: 'Map', route: '/map' },
  { id: '8', title: 'Contact', route: '/contact' },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>Mazatlán Guide</Text>
      <FlatList
        horizontal
        data={menuOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(item.route)} style={styles.navItem}>
            <Text style={styles.navText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


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


