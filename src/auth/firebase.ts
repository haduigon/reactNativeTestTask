import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const user = await GoogleSignin.signIn();
    const {idToken} = await GoogleSignin.getTokens();
    const googleCridentials = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCridentials);
    return user;
  } catch (error) {
    console.error('Error during Google Sign-In:', error);
    return error;
  }
};

export const createAccWithCrids = async (email: string, password: string) => {
  try {
    const newUser = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return newUser;
  } catch (error: any) {
    console.log(error.code);
    return error;
  }
};

export const loginWithCrids = async (email: string, password: string) => {
  try {
    const user = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    return user;
  } catch (error: any) {
    console.log(error.code);
    return error;
  }
};

export const signInWithFacebook = async () => {
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User canceled auth';
  }

  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Smth went wrong';
  }

  const facebookCrids = auth.FacebookAuthProvider.credential(data.accessToken);
  console.log(facebookCrids, 'facebookCrids');
  
  return auth().signInWithCredential(facebookCrids);
}
