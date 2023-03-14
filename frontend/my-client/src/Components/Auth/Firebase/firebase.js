import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

var firebaseConfig = {
  apiKey: 'AIzaSyD-qW20yIeqU2550Ij5RgitK5oFqT-3jeQ',
  authDomain: 'lang-authorization.firebaseapp.com',
  projectId: 'lang-authorization',
  storageBucket: 'lang-authorization.appspot.com',
  messagingSenderId: '402224700058',
  appId: '1:402224700058:web:f00592f0785d639e03dd23',
  measurementId: 'G-B5768ZJ6LE'
};
 
var app = initializeApp(firebaseConfig);
export var auth = getAuth(app);

//sign in logic

var provider = new GoogleAuthProvider();


export const  signInWithGoogle=() => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName 

    localStorage.setItem("name",name)

  }).catch((err)=>{
    console.log(err);
  })
};