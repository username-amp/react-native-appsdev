import { Image, View, StyleSheet } from 'react-native'

const WaveSvg = () => {
  return (
   <View style={styles.container}>
     <Image source={require('../assets/poro.gif')} style={styles.image}/>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  image: { // Corrected the typo here
    height: 100,
    width: 100,
  }
})
export default WaveSvg
