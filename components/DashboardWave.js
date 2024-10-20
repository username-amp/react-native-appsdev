import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DashboardWave = () => {
  return (
    <View style={styles.bahayngSVG}>
    <Svg height="60"
      width="100%"
      style={styles.svg}
      viewBox='0 0 720 120'>
      <Path
        d="M 739 50 C 681 26 645 -45 223 95 A 300.11 300.11 0 0 1 0 27.35 V 120 H 800 V 113 ZM 777 109 C 678 98 649 11 223 95 A 300.11 300.11 0 0 1 0 73 V 120 H 800 V 113 Z"  // You can also adjust this
        fill="#e6d9ea"
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
    transform: [{ rotate: '180deg' }],
  },

  bahayngSVG: {
    position: 'relative',
    width: '100%',
    height: 60,
    overflow: 'hidden',
    
  },
});

export default DashboardWave;
