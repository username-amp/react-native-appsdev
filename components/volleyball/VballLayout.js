import { View, Text, StyleSheet, Pressable, Image, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const VballLayout = () => {
    const navigation = useNavigation();

    const handlePress = () => { 
        navigation.navigate('InsideVball');
    }

    const openHistoryLink = () => {
        Linking.openURL('https://olympics.com/en/news/what-history-volleyball-game-origin-mintonette-ymca-fivb-olympics');
    }

    const openAchievementLink = () => {
        Linking.openURL('http://www.volleyballadvisors.com/volleyball-teams.html');
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.lagayanngpic}>
                    <Image source={require('../../assets/volleybold.gif')} style={styles.pic} />
                </View>
                <View style={styles.bballdesc}>
                    <Text style={styles.bballtext}>Volleyball</Text>
                    <Text style={styles.description}>
                        Volleyball is a team sport where two teams of six players score by grounding a ball on the opponent's court over a net.
                    </Text>
                </View>
                <View style={styles.explore}>
                    <Pressable style={styles.exploreButton} onPress={handlePress}>
                        <Text style={styles.exploreText}>Explore Info...</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.iconContainer}>
                <View style={styles.iconbox}>
                    <Icon name="history" size={24} color="#690981" />
                    <Pressable onPress={openHistoryLink}>
                        <Text style={styles.iconText}>History</Text>
                        <Text style={styles.iconSubText}>Volleyball's rich history dates back to 1895, when it was invented by William G. Morgan.</Text>
                    </Pressable>
                </View>

                <View style={styles.iconbox}>
                    <Icon name="trophy" size={24} color="#690981" />
                    <Pressable onPress={openAchievementLink}>
                        <Text style={styles.iconText}>Achievements</Text>
                        <Text style={styles.iconSubText}>Discover the greatest teams and players in volleyball history.</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F1F7',
        height: '100%',
        width: '100%',
        padding: 20,
    },
    card: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
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
        color: '#690981',
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: '#494848',
    },
    explore: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    exploreButton: {
        backgroundColor: '#C7A9CF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    exploreText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    iconContainer: {
        width: '100%',
    },
    iconbox: {
        flexDirection: 'row',
        borderRadius: 5,
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    iconText: {
        fontWeight: 'bold',
        color: '#690981',
        marginLeft: 10,
    },
    iconSubText: {
        color: '#636363',
        marginLeft: 10,
        fontSize: 10,
    },
});

export default VballLayout;
