import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackHeader from '../header/BackHeader';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const InsideVball = () => {
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
        <Text style={styles.title}>Volleyball</Text>
        <Text style={styles.text}>
          Volleyball is a game played by two teams, usually of six players on a side, in which the players use their hands to bat a ball back and forth over a high net, trying to make the ball touch the court within the opponents' playing area before it can be returned.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>History</Text>
        <Text style={styles.text}>
          Volleyball was invented in 1895 and has since become a popular sport worldwide. It is played on a rectangular court, with two teams of six players each. The objective is to score points by sending the ball over the net and making it land on the opponent's court. The sport is governed by the Fédération Internationale de Volleyball (FIVB) and is a popular spectator sport, especially during major tournaments like the Olympics and World Championships.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Basic Rules of Volleyball</Text>
        <Text style={styles.text}>
          Volleyball is a team sport played on a rectangular court divided by a net. The objective is to score points by sending the ball over the net and making it land on the opponent's court.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>The Court</Text>
        <Text style={styles.text}>
          The court is 18 meters (59 feet) long and 9 meters (29 feet) wide, divided into two halves by a net. The net is 2.43 meters (7 feet 11 inches) high for men and 2.24 meters (7 feet 4 inches) high for women.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>The Ball</Text>
        <Text style={styles.text}>
          The volleyball is a spherical ball made of leather or synthetic material, with a diameter of 65-67 centimeters (25.6-26.4 inches) and a weight of 260-280 grams (9.2-9.9 ounces).
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>The Teams</Text>
        <Text style={styles.text}>
          Each team consists of six players, who can rotate between positions on the court. The players are divided into two groups: the "front row" and the "back row."
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>The Serve</Text>
        <Text style={styles.text}>
          The game begins with a serve, which is a hit of the ball by a player from the back row over the net. The ball must land within the opponent's court to be considered a legal serve. If the serve is not legal, the serving team loses the point.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>The Rally</Text>
        <Text style={styles.text}>
          After the serve, the teams play a rally, trying to keep the ball in play by hitting it over the net. The team that allows the ball to hit the floor or commits a fault loses the point. A fault can include hitting the ball out of bounds, hitting the net twice, or touching the ball with more than three body parts.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Scoring</Text>
        <Text style={styles.text}>
          A team scores a point when the opponent commits a fault or the ball lands on their court. The first team to reach 25 points wins the set, unless the score is tied at 24-24. In that case, the set is played until one team wins by two points. A match is usually played to the best of three or five sets.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Other Rules</Text>
        <Text style={styles.text}>
          There is a maximum of three hits per side before the ball must be returned to the opponent. The ball can be blocked, but the blocker cannot hit the ball twice in succession. The libero is a specialized defensive player who can only substitute for the back-row players.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Gameplay Structure</Text>
        <Text style={styles.text}>
          Teams and Players: Each team consists of six players who rotate positions throughout the game. {"\n"}
          Serve and Rally: The game starts with a serve, and teams alternate serving after each point. The goal is to keep the ball in play by hitting it over the net and preventing it from landing on your court. {"\n"}
          Offense and Defense: Teams play offense to attack the ball and score points, while defense focuses on preventing the opponent from scoring. {"\n"}
          Basic Skills: The game involves various skills like serving, passing, setting, attacking, blocking, and digging.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Scoring and Winning</Text>
        <Text style={styles.text}>
          Points: Points are scored when the opposing team commits a fault or the ball lands on their court. {"\n"}
          Sets and Matches: A set is typically won by reaching 25 points, and a match is usually played to the best of five sets.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Key Points and Observations</Text>
        <Text style={styles.text}>
          Three Touches: Each team is allowed a maximum of three contacts to return the ball. {"\n"}
          Positions: Players are divided into front and back rows, with specific roles for each position. {"\n"}
          Errors: Common errors include hitting the ball out of bounds, failing to return the ball within three touches, and touching the net. {"\n"}
          Strategy: Volleyball requires strategic play, considering factors like team composition, player skills, and opponent's strengths and weaknesses.
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
    fontSize: 24,
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
    color: '#666',
  },
});

export default InsideVball;
