import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx",
    projectId: "xxxx",
    storageBucket: "xxxx",
    messagingSenderId: "xxxx",
    appId: "xxxx"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGooglePopup = () => {
    signInWithPopup(auth, provider).then((results) => {
        const username = results.user.displayName;
        const email = results.user.email;
        const profile = results.user.photoURL;
        sessionStorage.setItem("username", username!);
        sessionStorage.setItem("email", email!);
        sessionStorage.setItem("profile", profile!);
        window.location.reload();
    }).catch((error) => {
        alert(error);
    })
}

export const signOutFromGoogle = () => {
    signOut(auth).then((result) => {
        sessionStorage.clear();
        window.location.reload();
    }).catch((err) => {
        alert(err);
    })
}