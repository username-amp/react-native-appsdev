import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import BackHeader from '../header/BackHeader';

const InsideBball = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <BackHeader />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.section}>
                    <Text style={styles.title}>Basketball</Text>
                    <Text style={styles.paragraph}>
                        Basketball is a team sport where two teams of five players each try to score points by throwing a ball through a hoop mounted on a stand at each end of the court. The ball is usually made of leather or synthetic material and is inflated to a specific pressure.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.subTitle}>Equipment</Text>
                    <Text style={styles.sectionHeader}>Court Equipment</Text>
                    <Text style={styles.paragraph}>Basketball Court: A rectangular playing surface with lines marking the boundaries and key areas.</Text>
                    <Text style={styles.paragraph}>Basketball Hoops: Two hoops mounted on stands at opposite ends of the court, each with a net.</Text>
                    <Text style={styles.paragraph}>Backboard: A rectangular board behind the hoop that helps deflect the ball.</Text>

                    <Text style={styles.sectionHeader}>Player Equipment</Text>
                    <Text style={styles.paragraph}>Basketball: A spherical ball made of leather or synthetic material.</Text>
                    <Text style={styles.paragraph}>Basketball Shoes: Specialized shoes designed for traction, support, and comfort on the court.</Text>
                    <Text style={styles.paragraph}>Basketball Jerseys: Uniform tops worn by players, often with team colors and numbers.</Text>
                    <Text style={styles.paragraph}>Basketball Shorts: Uniform bottoms worn by players.</Text>
                    <Text style={styles.paragraph}>Basketball Socks: Socks designed for comfort and support during gameplay.</Text>
                    <Text style={styles.paragraph}>Mouthguard: A protective device worn to prevent dental injuries.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.subTitle}>Rules</Text>
                    <Text style={styles.sectionHeader}>Basic Rules</Text>
                    <Text style={styles.paragraph}>Court: The game is played on a rectangular court with a hoop at each end.</Text>
                    <Text style={styles.paragraph}>Teams: Each team consists of five players.</Text>
                    <Text style={styles.paragraph}>Scoring: Points are scored by shooting the ball through the hoop.</Text>
                    <Text style={styles.paragraph}>Fouls: A foul is a violation of the rules, such as illegal contact with an opponent.</Text>
                    <Text style={styles.paragraph}>Timeouts: Teams can call timeouts during the game.</Text>

                    <Text style={styles.sectionHeader}>Gameplay Rules</Text>
                    <Text style={styles.paragraph}>Dribbling: A player can move the ball by bouncing it on the court with one hand.</Text>
                    <Text style={styles.paragraph}>Passing: A player can pass the ball to a teammate.</Text>
                    <Text style={styles.paragraph}>Shooting: A player can shoot the ball through the hoop.</Text>
                    <Text style={styles.paragraph}>Rebounding: A player can grab a missed shot and gain possession of the ball.</Text>
                    <Text style={styles.paragraph}>Defense: Players on the defensive team try to prevent the opposing team from scoring.</Text>

                    <Text style={styles.sectionHeader}>Specific Rules</Text>
                    <Text style={styles.paragraph}>Three-Second Rule: A player cannot remain in the opponent's restricted area (under the basket) for more than three seconds.</Text>
                    <Text style={styles.paragraph}>Five-Second Rule: A player must pass or shoot the ball within five seconds of receiving it.</Text>
                    <Text style={styles.paragraph}>Traveling: A player cannot take more than two steps without dribbling the ball.</Text>
                    <Text style={styles.paragraph}>Double Dribbling: A player cannot dribble the ball twice with the same hand without passing or shooting.</Text>
                    <Text style={styles.paragraph}>Out-of-Bounds: The ball goes out of bounds when it touches the floor outside the court.</Text>
                    <Text style={styles.paragraph}>Shot Clock: Teams have a limited amount of time to shoot the ball (usually 24 seconds).</Text>

                    <Text style={styles.sectionHeader}>Fouls and Free Throws</Text>
                    <Text style={styles.paragraph}>Personal Fouls: A player can be called for a personal foul for illegal contact with an opponent.</Text>
                    <Text style={styles.paragraph}>Technical Fouls: Technical fouls can be called on players or coaches for unsportsmanlike behavior.</Text>
                    <Text style={styles.paragraph}>Free Throws: When a player is fouled while shooting, they are awarded free throws.</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F1F7', // Updated background color
    },
    scrollContainer: {
        padding: 15,
    },
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#690981', // Updated title color
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#690981', // Updated subtitle color
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        color: '#690981', // Updated section header color
        marginTop: 10,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 8,
        color: '#494848', // Updated paragraph color
    },
});

export default InsideBball;
