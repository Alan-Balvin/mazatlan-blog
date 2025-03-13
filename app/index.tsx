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
    longDescription: "Mazatlán, known for its beautiful beaches and vibrant nightlife, hides a treasure in its heart: the Historic Center. This neighborhood, declared a World Heritage Site , is a journey back in time to the colonial era, with its cobblestone streets, neoclassical buildings, and lively plazas. The Historic Center is not only a tourist attraction, but also a place where many Mazatlecos have decided to put down roots. Its residents enjoy a vibrant life, surrounded by history, culture, and a wide range of services and entertainment. The settlements in the Historic Center were created by people of diverse nationalities, including Germans, French, English, Spanish, Americans, Italians, and Asians, each contributing their ideas and knowledge. Since the 19th century, Mazatlán, thanks to its port, became a crucial point for trade between countries, primarily with the East and Europe. This commercial activity boosted the city's development and attracted people from other latitudes to establish companies and contribute to its economic success.Until 1913, numerous companies were founded, producing a variety of products, including footwear, cigars, candles, foundries, ice, soap, carriages, and beer, generating great wealth and constructing buildings in different styles, including Baroque. These buildings, which today attract tourism and beauty to the Historic Center, reflect the age and historical value of the area.",
    image: 'https://oem.com.mx/elsoldemazatlan/img/17879273/1657436089/BASE_LANDSCAPE/768/centro%20historico%20mazatlan.webp' 
  },
  { id: '6', 
    name: 'Acuario de Mazatlán', 
    description: 'Gran variedad de especies marinas, espectáculos con animales y exhibiciones educativas.',
    longDescription: "The Great Mazatlan Aquarium, dedicated to the Sea of Cortez, extends over 26,000 square meters in a construction that resembles a building in ruins that emerges from the vegetation that surrounds the beaches of Mazatlan. Considered the largest aquarium in Latin America, it was consolidated thanks to a public-private partnership in which 1.8 billion pesos (97 million dollars) were invested, of which 30 percent corresponds to public funds contributed by the Ministry of Tourism (SECTUR) and the National Bank of Public Works and Services (Banobras) through the Government of the State of Sinaloa, and 70 percent are private funds from Kingu Mexicana. Of the resources allocated to the Gran Acuario Mazatlán Mar de Cortés, 8.7 million dollars were used to manufacture, transport and install the Life Support System, which consists of filtering and cleaning seawater for the marine species.",
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
    longDescription: "Located about 5 miles north of Mazatlan's historic downtown, the Golden Zone stretches from the iconic Valentinos building to the Marina, and offers a perfect blend of luxury, entertainment and natural beauty. The reason this area is known as the “Golden Zone” is because it is home to the city's best tourist services, including high-end hotels, renowned restaurants, nightclubs and bars. It is also home to some of Mazatlan's most popular beaches, such as Playa Camaron and Playa Gaviotas, which not only offer beautiful views of the Pacific, but are also fully guarded by lifeguards, ensuring the safety of swimmers enjoying their days in the sun. An outstanding example is the Shell Museum, which offers visitors a unique experience to learn about the marine diversity of the region.In terms of gastronomic offerings, the Golden Zone is home to some of the most famous restaurants in the port, including Los Arcos, known for its delicious fresh seafood dishes and excellent quality cuts of meat. For those who prefer nightlife, the Zona Dorada does not disappoint, this district is known for its nightclubs and bars, where locals and tourists alike can enjoy nights full of music, dancing and fun in the company of friends, family or couples.",
    image:'https://lasflores.com.mx/temp/slider-01.jpg' 
  },
  { 
    id: '9', 
    name: 'Playa Brujas', 
    description: 'Playa tranquila, ideal para surfistas y quienes buscan relajarse lejos del centro.',
    longDescription: "Playa bruja is a place located in Mazatlan, a beach full of mystery and big waves.The name of this beach comes from a couple of local legends that narrate the appearance of witches on the beach during full moon nights.On the beach there is a cave that can be accessed in two ways, by climbing among the rocks or when the tide is low. It is said that this cave is full of bats and inside dwells a witch who is in charge of protecting the gold and treasures that pirates unloaded there in ancient times.It is rumored that one of these pirates, known as “El Capitán Sombra”, landed at Playa Brujas in search of a safe haven to hide his stolen booty and made a pact with the witches that inhabited the beach, giving up part of his treasure in exchange for the magical protection they offered him. In their alliance with Captain Sombra, they used the stolen gems and coins to strengthen their powers and perform rituals on full moon nights and it was said that the witches drowned swimmers and those who dared to snatch the hidden treasures.Over the years, rumors of Playa Brujas and its cursed treasure spread throughout the region. Intrepid adventurers took on the challenge of confronting the curses and deciphering the enigmas of the beach; however, few returned and none succeeded in seizing the treasure.",
    image:'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/209000/209433-Sinaloa.jpg' 
  },
  { 
    id: '10', 
    name: 'Carnaval de Mazatlán', 
    description: 'Uno de los carnavales más grandes y coloridos de México, con desfiles y conciertos.',
    longDescription: "In Mazatlan time is measured by Carnivals. It is considered the third best carnival in the world. It is celebrated 5 days before Ash Wednesday. It has more than a century of history (it was held for the first time in 1898).The Mazatlan Carnival is distinguished by its fun at the rhythm of band and drum. It also includes cultural activities. The Olas Altas and Claussen promenades are the main stage of the Carnival; they become a gigantic gathering and dancing center by the Pacific Ocean. The Carnival Queen is the female representative of Mazatleca's greatest celebration. Miss. Wilfrida Farmer was the first Carnival Queen of Mazatlan. The Carnival Queen has been chosen in different ways throughout history. The second place winning candidate is designated Queen of the Floral Games. She will preside over all cultural events, representing the artistic and poetic face of Carnaval. The first Queen of the Floral Games was crowned in 1925.The Children's Court joined the Carnival in 1968. The aspiring girls participate in different mechanics of election.The King of Carnival is distinguished by its popular and picaresque character. The first Carnival King was elected in 1898. He has also been called King of Joy and King of Madness. The Naval Combat takes place on Carnival Saturday in Olas Altas. It is an amazing fireworks show on the beach. It alludes to “La Batalla contra la Coderliére”, the second invasion by the Coderliére.",
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
