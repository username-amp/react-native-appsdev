import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const RegisterCurve = () => {
    return (
        <View style={styles.registerCurve}>
          <Svg
            height="60"
            width="100%"
            style={styles.registerSVG}
          >
            <Path
                d="M0,6 C0,0 252,-13 350,110 L600,100 L0,100 Z"
              fill="#FFFFFF"
            />
          </Svg>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      registerSVG: {
       
        left: 0,
        width: '60%',
      },
    
      registerCurve: {
        width: '80%',
        height: 60,
        overflow: 'hidden',
        position: 'relative',
      },
    });
  

export default RegisterCurve