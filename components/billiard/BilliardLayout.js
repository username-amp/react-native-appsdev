import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const BilliardLayout = () => {
    const navigation = useNavigation();

    const handlePress = () => { 
        navigation.navigate('InsideBilliard');
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.lagayanngpic}>
                    <Image source={require('../../assets/billiard.png')} style={styles.pic} />
                </View>
                <View style={styles.bballdesc}>
                    <Text style={styles.bballtext}>Billiards</Text>
                    <Text style={styles.description}>
                        Billiards refers to a variety of games that involve hitting balls with a cue stick on a rectangular table.
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
                    <Pressable>
                        <Text style={styles.iconText}>History</Text>
                        <Text style={styles.iconSubText}>The game of billiards dates back to the 15th century in Europe.</Text>
                    </Pressable>
                </View>

                <View style={styles.iconbox}>
                    <Icon name="users" size={24} color="#690981" />
                    <Pressable>
                        <Text style={styles.iconText}>Famous Players</Text>
                        <Text style={styles.iconSubText}>Famous players in the world of billiards.</Text>
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
        marginTop: 20,
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

export default BilliardLayout;
