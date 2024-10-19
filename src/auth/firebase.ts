import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

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
