import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const LoginCurve = () => {
  return (
    <View style={styles.bahayngSVG}>
      <Svg
        height="60" // Shrink height of the SVG
        width="100%" // Full width
        style={styles.svg}
      >
        <Path
          d="M0,0 C200,100 250,0 600,0 L600,0 L0,0 Z" // Adjusted path to fit smaller height
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
    width: '100%', // Full width of the parent container
  },

  bahayngSVG: {
    position: 'relative',
    width: '80%', // Full width of the parent container
    height: 60, // Shrink the height of the view container
    overflow: 'hidden', // Hide any overflow from the curve
  
  },
});

export default LoginCurve;