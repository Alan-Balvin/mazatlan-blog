import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const attractions = [
  { 
    id: '1', 
    name: 'Malecón de Mazatlán', 
    description: 'Hermosa vista al mar.', 
    image: 'https://scontent.fmzt3-1.fna.fbcdn.net/v/t39.30808-6/481920029_586376851055626_5553615872810055271_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=85GvxDHnu68Q7kNvgFN3HZi&_nc_oc=Adi3sP7pZpNYCWuDntMtq8zGFSRbvKLAvWEY9Rax2ezVPJFzSMTgCDOkjaGQrIhieBfcopGd7kYie2x6suEWzykX&_nc_zt=23&_nc_ht=scontent.fmzt3-1.fna&_nc_gid=AKiG7nNInEy4bS2shuDnsD0&oh=00_AYESwsEy__elRxm-mOYweLvNe44_FrAHnWarMyWzBqJSXg&oe=67D3F1AB' 
  },
  { 
    id: '2', 
    name: 'Faro de Mazatlán', 
    description: 'El faro natural más alto del mundo.', 
    image: 'https://www.hinds.es/wp-content/uploads/2023/04/10-cosas-altamente-calificadas-para-hacer-en-Mazatlan-Mexico.jpg' 
  },
  { 
    id: '3', 
    name: 'Isla de la Piedra', 
    description: 'Playas tranquilas y comida deliciosa.', 
    image: 'https://punto.mx/wp-content/uploads/2022/09/ISLA-DE-LA-PIEDRA-MAZATLAN.jpg' 
  },
  { 
    id: '4', 
    name: 'Teatro Ángela Peralta', 
    description: 'Histórico teatro restaurado, sede de eventos culturales y artísticos.',
    image: 'https://www.mexicoescultura.com/galerias/espacios/principal/teatroangela_peralta1_2.jpg' 
  },
  { 
    id: '5', 
    name: 'Centro Histórico', 
    description: 'Calles coloniales, plazas y una vibrante vida nocturna en el corazón de Mazatlán.',
    image: 'https://oem.com.mx/elsoldemazatlan/img/17879273/1657436089/BASE_LANDSCAPE/768/centro%20historico%20mazatlan.webp' 
  },
  { id: '6', 
    name: 'Acuario de Mazatlán', 
    description: 'Gran variedad de especies marinas, espectáculos con animales y exhibiciones educativas.',
    image:'https://cdn-3.expansion.mx/dims4/default/8f43edd/2147483647/strip/true/crop/4032x3024+0+0/resize/1200x900!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff4%2F4a%2F5ea433944442bc4d9ade0ecae737%2Fimg-4046.jpg' 
  },
  { 
    id: '7', 
    name: 'Laguna del Camarón', 
    description: 'Un hermoso espacio natural con senderos y áreas de observación de aves.',
    image:'https://sinaloaenlinea.com/wp-content/uploads/2023/07/Imagen-de-WhatsApp-2023-07-05-a-las-12.23.47-1024x768.jpg' 
  },
  { 
    id: '8', 
    name: 'Zona Dorada', 
    description: 'La mejor zona turística con hoteles, restaurantes, bares y vida nocturna.',
    image:'https://lasflores.com.mx/temp/slider-01.jpg' 
  },
  { 
    id: '9', 
    name: 'Playa Cerritos', 
    description: 'Playa tranquila, ideal para surfistas y quienes buscan relajarse lejos del centro.',
    image:'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/209000/209433-Sinaloa.jpg' 
  },
  { 
    id: '10', 
    name: 'Carnaval de Mazatlán', 
    description: 'Uno de los carnavales más grandes y coloridos de México, con desfiles y conciertos.',
    image:'https://noro.mx/wp-content/uploads/2024/01/carnaval-de-mazatlan-2024-artistas-horarios-sinaloa-1024x576.jpeg' 
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAZATLAN ATTRACTIONS</Text>
      <FlatList
        data={attractions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  card: { 
    backgroundColor: '#f8c291', 
    borderRadius: 10, 
    marginBottom: 10, 
    overflow: 'hidden', 
    elevation: 3 
  },
  image: { width: '100%', height: 200 },
  textContainer: { padding: 15 },
  itemText: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#333', marginTop: 5 },
});
