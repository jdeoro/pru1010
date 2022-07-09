import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

 const firebaseConfig = {
  apiKey: "AIzaSyCC8UjZHKFRBpafap9lh7RFmF4SCKhE8ao",
  authDomain: "producthunt-75ad5.firebaseapp.com",
  projectId: "producthunt-75ad5",
  storageBucket: "producthunt-75ad5.appspot.com",
  messagingSenderId: "728853885247",
  appId: "1:728853885247:web:4200ed91e8c83f35fb238a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

