import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../app/styles/styles';


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

export const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>Mazatlán Guide</Text>
      <FlatList
        horizontal
        data={menuOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(item.route as any)} style={styles.navItem}>


            <Text style={styles.navText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
