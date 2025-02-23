/* eslint-disable */
import React, {
  useEffect,
  // useEffect,
  useState,
} from 'react';
import {
  SafeAreaView,
  Text,
  // TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Section} from '../Section/Section';
import auth, {
  // FirebaseAuthTypes
} from '@react-native-firebase/auth';
import Loader from '../Loader/Loader';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../screens/HomeScreen';
// import styles from './LoginStyles';
// import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';
import {
  signInWithGoogle,
  signInWithFacebook,
} from '../../auth/firebase';
import LoginForm from '../LoginForm/LoginForm';

GoogleSignin.configure({
  webClientId:
    '139387485373-gge9nt41v8dulo7k78vqmrl5f9d0mv1d.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

type UserData = {
  email: string,
  password: string,
}

const defaultUserData: UserData = {
  email: '',
  password: '',
}

export const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [loading, setLoading] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    auth().onAuthStateChanged(authUser => {
      if (authUser) {
        navigation.navigate('About');
      } else {
        navigation.navigate('Home');
      }
    });

    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Section title="Please login">

        <LoginForm />
 
        <Text
          style={{
            marginTop: 20,
          }}>
          Login with Google
        </Text>
        <View>
          <CustomButton name="Sign In with Google" onPress={signInWithGoogle} />
        </View>
        <Text
          style={{
            marginTop: 20,
          }}>
          Login with Facebok
        </Text>
        <CustomButton name="Login with Facebook" onPress={signInWithFacebook}/>
      </Section>
    </SafeAreaView>
  );
};
