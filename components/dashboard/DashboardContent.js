import BballLayout from '../basketball/BballLayout'
import { View, StyleSheet } from 'react-native'



const DashboardContent = () => {
  return (
    <View style={styles.container}>
        <BballLayout />
    </View>
  )
}

styles = StyleSheet.create({
    container: {
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
    }
})
export default DashboardContent 