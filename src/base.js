import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    "projectId": "frb-up-down-app",
    "appId": "1:391063247671:web:aae8a9ac1c317f0ead98b2",
    "storageBucket": "frb-up-down-app.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyBnRcotJ-NvKQGRjyofbX3g7ag67TnSqdM",
    "authDomain": "frb-up-down-app.firebaseapp.com",
    "messagingSenderId": "391063247671"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

