// App.js
import React from 'react';
import Navigation from './routes/Navigation';
import { useFonts } from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
    'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
  });

  return <Navigation />;
};

export default App;