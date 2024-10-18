import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const BballLayout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bballdesc}>
        <Text style={styles.bballtext}>Basketball</Text>
        <Text>loredvousbdjvksghvbdsjkzcvksgkb</Text>
      </View>
      <View style={styles.explore}>
        <Pressable>
          <Text>Explore Info</Text>
        </Pressable>
      </View>

      <View style={styles.lagayanngpic}>
        <Image source={require('../../assets/bball.png')} style={styles.pic} />
      </View>

      {/* Referencing iconContainer properly */}
      <View style={styles.iconContainer}>
        <View style={styles.iconbox}>
          <Icon name="bars" size={24} color="#fff" />
          <Pressable>
            <Text>History</Text>
            <Text>Teams Tries to toss an</Text>
          </Pressable>
        </View>

        <View style={styles.iconbox}>
          <Icon name="bars" size={24} color="#fff" />
          <Pressable>
            <Text>History</Text>
            <Text>Teams Tries to toss an</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: '100%',
    width: '100%',
  },
  pic: {
    height: 200,
    width: 200,
  },
  lagayanngpic: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bballdesc: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconbox: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bballtext: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  explore: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BballLayout;
