import { getApps, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyATgsKMDPt5KCTeoQC48CTqAy7WY5_bk64",
    authDomain: "samsung-galaxy-d7a2e.firebaseapp.com",
    projectId: "samsung-galaxy-d7a2e",
    storageBucket: "samsung-galaxy-d7a2e.appspot.com",
    messagingSenderId: "1086216819726",
    appId: "1:1086216819726:android:92a0b7466f74163454585f",
};

// Initialize the app once or get the existing app instance
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize authentication with persistence set to React Native's AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
