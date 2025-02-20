import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNR9uNwH8b75HyuTFHRzpUE5AH1sN0_pc",
  authDomain: "tutto-day-tracker.firebaseapp.com",
  projectId: "tutto-day-tracker",
  storageBucket: "tutto-day-tracker.firebasestorage.app",
  messagingSenderId: "234307792246",
  appId: "1:234307792246:web:09fc633228cbc9ebaf1e57",
  measurementId: "G-BWFFVBX89S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseInstance = firebase; // 소셜로그인
export const authService = firebase.auth(); // 로그인 모듈
export const dbService = firebase.firestore(); // NoSQL 데이터베이스
export const storageService = firebase.storage(); // 이미지 저장 스토리지
