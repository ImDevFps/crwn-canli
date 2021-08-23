import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCe2PHAI4Rfu9FwJu_88ai26y3DYfyBB2A",
    authDomain: "crwn-db-3c663.firebaseapp.com",
    projectId: "crwn-db-3c663",
    storageBucket: "crwn-db-3c663.appspot.com",
    messagingSenderId: "63050795983",
    appId: "1:63050795983:web:0f2f3ce0b9a560ae3ae0ba",
    measurementId: "G-V8Y29FT7L2"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
