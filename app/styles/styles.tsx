import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    navbar: {
       backgroundColor: '#ff006e',
       padding: 10,
       alignItems: 'center',
       borderRadius: 10,
       flexDirection: 'row',
       justifyContent: 'space-between',
     },
     navbarText: {
       color: 'white',
       fontSize: 20,
       fontWeight: 'bold',
     },
       navItem: {
       marginHorizontal: 10,
       padding: 8,
     },
     navText: {
       color: 'white',
       fontSize: 16,
     },
     container: { 
       flex: 1, 
       padding: 20, 
       backgroundColor: '#90e0ef' 
     },
     title: { 
       fontSize: 24, 
       fontWeight: 'bold', 
       marginBottom: 10, 
       textAlign: 'center',
       marginVertical: 5, 
     },
     card: {
       margin: 10,
       backgroundColor: '#f9f9f9',
       borderRadius: 10,
       padding: 10,
       shadowColor: '#000',
       shadowOpacity: 0.2,
       shadowRadius: 4,
       elevation: 3,
     },
     image: {
       width: '100%',
       height: 200,
       borderRadius: 10,
     },
     textContainer: { padding: 15 },
     itemText: { fontSize: 18, fontWeight: 'bold' },
     description: { fontSize: 14, color: '#333', marginTop: 5 },
     
   });