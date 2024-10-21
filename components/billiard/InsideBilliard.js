import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import BackHeader from '../header/BackHeader';

const InsideBilliard = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
    }, [navigation]);
  return (
    <View style={styles.lagayan}>
        <BackHeader />
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Billiard</Text>

      <Text style={styles.subHeader}>Where was billiards invented?</Text>
      <Text style={styles.body}>
        Billiards has a long and complex history, with many different variations and regional styles that have evolved over time. One of the earliest known forms of the game was ground billiards, which was played outdoors on a lawn or field using balls and wooden mallets. One theory is that billiards evolved from a game called “croquet,” which was popular in France during the 14th century. Another theory is that billiards evolved from a game called “paille-maille,” which was played in France during the 15th century.
      </Text>

      <Text style={styles.subHeader}>History of Billiards</Text>
      <Text style={styles.body}>
        For centuries, billiards has been one of the most popular and enduring games in the world. From its origins as an outdoor pastime played on lush lawns to its transformation into an indoor game played in cozy pubs and billiard halls, to its glamorous portrayal in Hollywood films, the game has undergone a fascinating evolution. The origins of billiards are not entirely clear, but it is believed to have originated in France in the 15th century as a lawn game similar to croquet. The game evolved over time and was eventually played indoors on a table covered in green baize. The modern version of pool, with numbered balls and pockets, emerged in the 19th century in the United States.
      </Text>

      <Text style={styles.subHeader}>What is Billiard?</Text>
      <Text style={styles.body}>
        Billiards refers to any of various games played on a rectangular table with a designated number of small balls and a long stick called a cue. The table and the cushioned rail bordering the table are topped with a felt-like tight-fitting cloth. Carom, or French billiards, is played with three balls on a table that has no pockets. Other principal games include English billiards, played with three balls; snooker, played with 21 balls and a cue ball; and pocket billiards, or pool, played with 15 balls and a cue ball. There are numerous varieties of each game, particularly of carom and pocket billiards. The earliest references to the game in Europe occur in the 15th century.
      </Text>

      <Text style={styles.subHeader}>Equipment in Billiards</Text>
      <Text style={styles.body}>
        The basic equipment of billiards includes:
      </Text>
      <Text style={styles.body}>
        - <Text style={styles.bold}>Cue Stick:</Text> Fundamental for striking billiard balls, requiring precision and balance.
      </Text>
      <Text style={styles.body}>
        - <Text style={styles.bold}>Chalk:</Text> Used on the cue tip to increase friction and prevent miscues.
      </Text>
      <Text style={styles.body}>
        - <Text style={styles.bold}>Billiards Gloves:</Text> Help achieve a smooth stroke by reducing sweat and skin contact.
      </Text>
      <Text style={styles.body}>
        - <Text style={styles.bold}>Pool Table:</Text> The centerpiece of billiard facilities, providing a flat, stable playing surface.
      </Text>
      <Text style={styles.body}>
        - <Text style={styles.bold}>Cue Racks:</Text> Organize and protect cue sticks when not in use.
      </Text>
      <Text style={styles.body}>
        - <Text style={styles.bold}>Billiard Balls:</Text> Precision-engineered for accurate gameplay.
      </Text>
      <Text style={styles.body}>
        - <Text style={styles.bold}>Scorekeeping Equipment:</Text> Essential for tracking players’ progress.
      </Text>
      <Text style={styles.body}>
        - <Text style={styles.bold}>Triangle Rack:</Text> Used to arrange and tightly rack the object balls at the beginning of each game.
      </Text>

      <Text style={styles.subHeader}>Tips or Gameplay in Billiard</Text>
      <Text style={styles.body}>
        To increase your chances of winning, focus on mastering your cue ball control and shot accuracy. Develop a solid understanding of angles, spin, and speed, allowing you to plan and execute shots effectively. Strategic shot selection and positioning are crucial in setting up subsequent shots.
      </Text>

      <Text style={styles.subHeader}>How to Win</Text>
      <Text style={styles.body}>
        - Analyze the table layout and plan your shots strategically.
      </Text>
      <Text style={styles.body}>
        - Master the ability to control the cue ball’s speed, spin, and position.
      </Text>
      <Text style={styles.body}>
        - Position the cue ball advantageously after each shot.
      </Text>
      <Text style={styles.body}>
        - Play defensively by leaving your opponent with limited options.
      </Text>
      <Text style={styles.body}>
        - Maintain patience and composure, avoiding rushed decisions.
      </Text>
      <Text style={styles.body}>
        - Regularly practice your cue ball control and overall technique.
      </Text>

      <Text style={styles.subHeader}>Rules of Billiard</Text>
      <Text style={styles.body}>
        Some Billiard Rules include:
      </Text>
      <Text style={styles.body}>
        - The objective is to pocket specific balls according to the game’s rules.
      </Text>
      <Text style={styles.body}>
        - Fouls can occur when a player fails to hit their designated object ball or pockets the cue ball.
      </Text>
      <Text style={styles.body}>
        - Shots must be taken from within the designated area behind the head string.
      </Text>
      <Text style={styles.body}>
        - Players may choose to play a safety shot intentionally.
      </Text>
      <Text style={styles.body}>
        - In some variations, players must call the ball and pocket they intend to shoot before executing a shot.
      </Text>
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
      flex: 1,
      padding: 15,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#690981',
    },
    subHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 15,
      color: '#690981',
    },
    body: {
      fontSize: 16,
      lineHeight: 22,
      marginBottom: 10,
      color: '#333',
    },
    bold: {
      fontWeight: 'bold',
      color: '#333',
    },
  });

export default InsideBilliard;
