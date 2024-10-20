import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const BadmintonLayout = () => {
    
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.lagayanngpic}>
          <Image source={require('../../assets/badminton.png')} style={styles.pic} />
        </View>
        <View style={styles.bballdesc}>
          <Text style={styles.bballtext}>Badminton</Text>
          <Text style={styles.description}>Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.</Text>
        </View>
        <View style={styles.explore}>
          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreText}>Explore Info...</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <View style={styles.iconbox}>
          <Icon name="history" size={24} color="#494848" />
          <Pressable>
            <Text style={styles.iconText}>History</Text>
            <Text style={styles.iconSubText}>The game was developed in British India in the mid-19th century.</Text>
          </Pressable>
        </View>

        <View style={styles.iconbox}>
          <Icon name="users" size={24} color="#494848" />
          <Pressable>
            <Text style={styles.iconText}>Teams</Text>
            <Text style={styles.iconSubText}>Top players and teams in the world of badminton.</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    marginBottom: 20,
  },
  pic: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  lagayanngpic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  bballdesc: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  bballtext: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#494848',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#636363',
  },
  explore: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  exploreButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  exploreText: {
    color: '#494848',
    fontSize: 16,
  },
  iconContainer: {
    width: '100%',
    marginTop: 20,
  },
  iconbox: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  iconText: {
    fontWeight: 'bold',
    color: '#494848',
    marginLeft: 10,
  },
  iconSubText: {
    color: '#636363',
    marginLeft: 10,
    fontSize: 12,
  },
});

export default BadmintonLayout;
