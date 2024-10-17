import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../screens/HomeScreen';

export const useSignInWithGoogle = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const { idToken } = await GoogleSignin.getTokens();
      const googleCridentials = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCridentials);
      navigation.navigate('About');
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };
};
