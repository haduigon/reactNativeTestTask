import React, { useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { Settings } from 'react-native-fbsdk-next';


function App(): React.JSX.Element {
  useEffect(() => {
  Settings.initializeSDK();
}, []);
  return (
    <AppNavigator />
  );
}

export default App;
