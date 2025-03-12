import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const attractions = [
  { 
    id: '1', 
    name: 'Malecón de Mazatlán', 
    description: 'Hermosa vista al mar.', 
    longDescription: "The historic stage of Mazatlan's International Carnival and the passage of thousands of visitors week after week, serves as one of the longest and most impressive in the world. A great place to jog, ride a bike or just take a walk.That's right! We're talking about Mazatlan's Malecon, one of the port's main attractions. This road did not originally begin as a recreational area, since its original idea was a dike to avoid problems such as flooding in the city in 1830, and later an embankment was built to be used as an urban and recreational space.Only surpassed by Rio de Janeiro in Brazil, Mazatlan's Malecon is considered the second longest in the world. It stretches from Paseo del Centenario to Cerritos Beach, passing by several beaches, restaurants and hotels along the way.Its extension makes it the largest boardwalk in all of Mexico, as it has a length of 21 kilometers to enjoy the seafront, this is composed of nine sections that go from the Historic Center to the north of the city.",
    image: 'https://scontent.fmzt3-1.fna.fbcdn.net/v/t39.30808-6/481920029_586376851055626_5553615872810055271_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=85GvxDHnu68Q7kNvgFN3HZi&_nc_oc=Adi3sP7pZpNYCWuDntMtq8zGFSRbvKLAvWEY9Rax2ezVPJFzSMTgCDOkjaGQrIhieBfcopGd7kYie2x6suEWzykX&_nc_zt=23&_nc_ht=scontent.fmzt3-1.fna&_nc_gid=AKiG7nNInEy4bS2shuDnsD0&oh=00_AYESwsEy__elRxm-mOYweLvNe44_FrAHnWarMyWzBqJSXg&oe=67D3F1AB' 
  },
  { 
    id: '2', 
    name: 'Faro de Mazatlán', 
    description: 'El faro natural más alto del mundo.',
    longDescription: "Since the dawn of the port, the Mazatlan Lighthouse has witnessed and accompanied the booming growth of the city. The Mazatlan Lighthouse is among the select list of lighthouses in the world located on natural mounds that exceed 150 meters in height.The location and altitude of Crestón Island was used to guide navigators with rudimentary bonfires, before the first oil-lit lamp was installed in 1879, whose luminous beam was achieved with a combination of mirrors and a Fresnel lens. However, the stationary signal was mistaken for stars, so in 1905 it was replaced by a rotating lamp illuminated by hydrogen gas. In 1930, Creston Island was connected to the mainland by a fill and embankment. In 1933, an electric lamp replaced the hydrogen lamp and remained in operation until August 2021, when it was replaced by modern lighting equipment. The current lamp has a range and light penetration distance of up to 24 nautical miles, attributes that meet the international standards of the International Maritime Signaling Association. With its 157 meters above sea level, the Mazatlan Lighthouse is the place with the most spectacular views of the city, the port area and the Pacific Ocean, complemented by a great biodiversity of plants and wild animals that inhabit it. For this reason, Mazatlecas and Mazatlecos, proud and interested in its conservation and sustainability, have joined forces since 2019 to make this historical, cultural and natural heritage of such relevance, the social object of the private citizen organization Parque Natural Faro Mazatlan. ", 
    image: 'https://www.hinds.es/wp-content/uploads/2023/04/10-cosas-altamente-calificadas-para-hacer-en-Mazatlan-Mexico.jpg' 
  },
  { 
    id: '3', 
    name: 'Isla de la Piedra', 
    description: 'Playas tranquilas y comida deliciosa.', 
    longDescription: "Stone Island in Mazatlan is one of the tourist destinations that you have to visit when you are on vacation in Mazatlan, because of the beauty of its beaches. But do you know how it went from being a virgin place to one of the most popular spots?According to the blog mazatleco, com, Isla de la Piedra is located a few kilometers from Mazatlan, and can be reached by boat or by land, but in the past, its inhabitants could only arrive in a rowing boat from El Rosario along a road that was formed in Huizache-Caimanero. According to history, Isla de la Piedra was constituted as an ejido in 1936, when its first settlers, who were dedicated to agriculture, officially registered it with that name, since where the first settlements were located there was a large stone, so they decided to call it Isla de la Piedra: Stone Island.Agriculture was left aside when irrigation became more complicated, so they dedicated themselves to the commercialization of coconut, since coconut palms abounded in that region and they came to Mazatlan a lot. Fishing became the main activity of its inhabitants, in addition to its beautiful beaches attracted the attention of the few tourists who knew at that time of this hidden destination.With the dredging of the navigation channel in Mazatlan, the three islands formed a group and strengthened the destination, which joined the peninsula.Isla de la Piedra gained fame among the locals and tourists who came to the Pearl of the Pacific and visited it more and more, to the extent that restaurants and beach activities were installed in the area, to the point of making it the preferred destination for many. ",
    image: 'https://punto.mx/wp-content/uploads/2022/09/ISLA-DE-LA-PIEDRA-MAZATLAN.jpg' 
  },
  { 
    id: '4', 
    name: 'Teatro Ángela Peralta', 
    description: 'Histórico teatro restaurado, sede de eventos culturales y artísticos.',
    longDescription: "The design and construction involved master builders, technicians and artisans of the region, who adopted the models of nineteenth-century Romantic Theaters, with Italian-style horseshoe-shaped halls, which responded to the needs of the population for meetings and recreation.In the mid 1800's, Mazatlan had a very poor theater, called Teatro del Recreo, located precisely on Recreo Street, today Constitución Street, between Alquiles Serdan and Benito Juárez Streets.In August 1869, businessman Manuel Rubio submitted a request to Mazatlan's City Hall to build a theater in the city. Construction began that same year under the direction of City Engineer Librado Tapia. In support of the project, the Mazatlan City Council agreed to waive Rubio's municipal taxes for twenty years, counted from the completion of the construction.Manuel Rubio died in a shipwreck while on his way to Paris with the intention of bringing back sets for the theater from Europe. He never saw the completion of his work, but his widow, Doña Vicenta Unzueta, continued the construction until its inauguration. In the little more than five years it took to build it, the investment, originally estimated at $30,000.00 (thirty thousand pesos), doubled to around $70,000 (seventy thousand pesos).",
    image: 'https://www.mexicoescultura.com/galerias/espacios/principal/teatroangela_peralta1_2.jpg' 
  },
  { 
    id: '5', 
    name: 'Centro Histórico', 
    description: 'Calles coloniales, plazas y una vibrante vida nocturna en el corazón de Mazatlán.',
    longDescription: "",
    image: 'https://oem.com.mx/elsoldemazatlan/img/17879273/1657436089/BASE_LANDSCAPE/768/centro%20historico%20mazatlan.webp' 
  },
  { id: '6', 
    name: 'Acuario de Mazatlán', 
    description: 'Gran variedad de especies marinas, espectáculos con animales y exhibiciones educativas.',
    longDescription: "",
    image:'https://cdn-3.expansion.mx/dims4/default/8f43edd/2147483647/strip/true/crop/4032x3024+0+0/resize/1200x900!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff4%2F4a%2F5ea433944442bc4d9ade0ecae737%2Fimg-4046.jpg' 
  },
  { 
    id: '7', 
    name: 'Laguna del Camarón', 
    description: 'Un hermoso espacio natural con senderos y áreas de observación de aves.',
    longDescription: "The Shrimp Lagoon is a unique ecosystem that is home to a great diversity of flora and fauna, a true natural treasure that deserves to be protected and preserved for future generations. It is a very important habitat for a variety of aquatic and terrestrial species, its calm waters and environment offer a refuge for migratory birds, such as herons, gulls and pelicans, which find here a resting place, in addition, the lagoon is home to various species of fish, crustaceans and mollusks.The importance of caring for and preserving this ecosystem cannot be underestimated, as it plays a fundamental role in the ecological balance of the region, according to people who come to this place to walk and spend moments of recreation.",
    image:'https://sinaloaenlinea.com/wp-content/uploads/2023/07/Imagen-de-WhatsApp-2023-07-05-a-las-12.23.47-1024x768.jpg' 
  },
  { 
    id: '8', 
    name: 'Zona Dorada', 
    description: 'La mejor zona turística con hoteles, restaurantes, bares y vida nocturna.',
    longDescription: "",
    image:'https://lasflores.com.mx/temp/slider-01.jpg' 
  },
  { 
    id: '9', 
    name: 'Playa Cerritos', 
    description: 'Playa tranquila, ideal para surfistas y quienes buscan relajarse lejos del centro.',
    longDescription: "",
    image:'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/209000/209433-Sinaloa.jpg' 
  },
  { 
    id: '10', 
    name: 'Carnaval de Mazatlán', 
    description: 'Uno de los carnavales más grandes y coloridos de México, con desfiles y conciertos.',
    longDescription: "",
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
