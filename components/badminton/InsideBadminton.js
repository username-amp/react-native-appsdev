import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackHeader from '../header/BackHeader';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const InsideBadminton = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.lagayan}>
      <BackHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Badminton</Text>
          <Text style={styles.text}>
            Badminton is a fast-paced racquet sport played by either two opposing players (singles) or two pairs (doubles). The game is played on a rectangular court divided by a net. Players use lightweight racquets to hit a shuttlecock, a projectile with feathers or synthetic materials, back and forth over the net.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Equipment</Text>
          <Text style={styles.text}>
            The essential equipment includes racquets, shuttlecock, net, court, footwear, and grips. Each piece of equipment is carefully designed to enhance gameplay and performance.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Game Play</Text>
          <Text style={styles.text}>
            Badminton revolves around players hitting a shuttlecock over the net with the aim of landing it in the opponent’s court. Points are awarded when the shuttlecock touches the ground in the opponent's court or if the opponent commits a fault.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Scoring</Text>
          <Text style={styles.text}>
            The game uses a rally point system, with matches typically played to 21 points. Players must win by a 2-point margin. The match consists of the best of three games.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Types of Shots</Text>
          <Text style={styles.text}>
            Some common shots in badminton include smash, clear, drop shot, and drive. Each shot is designed to challenge opponents in different ways.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Singles vs. Doubles</Text>
          <Text style={styles.text}>
            In singles, the court is narrower, and players must cover more ground. In doubles, teamwork and coordination are key, with players typically dividing responsibilities between the front and back of the court.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Rules</Text>
          <Text style={styles.text}>
            The objective is to hit the shuttlecock over the net and land it in the opponent’s court. Matches are played to the best of three games, with each game going up to 21 points. Points can be won regardless of who serves, using the rally point system.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  lagayan: {
    flex: 1,
    backgroundColor: '#F6F1F7',
  },
  container: {
    padding: 20,
    backgroundColor: '#F6F1F7',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#690981',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#690981',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#494848',
  },
});

export default InsideBadminton;
