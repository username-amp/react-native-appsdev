import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const RegisterCurve = () => {
    return (
        <View style={styles.registerCurve}>
          <Svg
            height="60" // Height of the SVG curve
            width="100%" // Full width
            style={styles.registerSVG}
          >
            <Path
      d="M0,6 C0,0 252,-13 350,110 L600,100 L0,100 Z"

           // Adjusted path for top curve
              fill="#FFFFFF"
            />
          </Svg>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      registerSVG: {
        position: 'absolute',
        left: 0,
        width: '60%',
      },
    
      registerCurve: {
        width: '80%', // Full width of the parent container
        height: 60, // Height of the view container
        overflow: 'hidden', // Hide overflow
        position: 'relative',
      },
    });
  

export default RegisterCurve