import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "../firebase";
import { auth } from "./config";

// signUpPage : 회원가입
export const signUpPage = async (userEmail, userPassword) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );
    console.log(userCredential);
    return userCredential.user;
  } catch (error) {
    console.error("Sign Up Error : ", error);
    throw error;
  }
};

// signInPage : 로그인
export const signInPage = async (userEmail, userPassword) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );
    console.log(userCredential);
    return userCredential.user;
  } catch (error) {
    console.error("Sign In Error : ", error);
    throw error;
  }
};

// signOutPage : 로그아웃
export const signOutPage = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Sign Out Error : ", error);
    throw error;
  }
};
