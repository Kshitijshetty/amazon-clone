import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtoxnEj7f7ln_I68TYCv36RzdGwLxiFmE",
    authDomain: "clone-5eff5.firebaseapp.com",
    databaseURL: "https://clone-5eff5.firebaseio.com",
    projectId: "clone-5eff5",
    storageBucket: "clone-5eff5.appspot.com",
    messagingSenderId: "274549067650",
    appId: "1:274549067650:web:2b0c0a0f3f49b27003899b",
    measurementId: "G-T7BP84XJRG",

});


const auth=firebase.auth();

export{auth};