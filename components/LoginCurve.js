import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const LoginCurve = () => {
  return (
    <View style={styles.bahayngSVG}>
      <Svg
        height="60"
        width="100%"
        style={styles.svg}
      >
        <Path
          d="M0,0 C200,100 250,0 600,0 L600,0 L0,0 Z"
          fill="#FFFFFF"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  svg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },

  bahayngSVG: {
    position: 'relative',
    width: '80%',
    height: 60,
    overflow: 'hidden',
  
  },
});


export default LoginCurve;