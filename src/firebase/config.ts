import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDdpcixWc6EIAS5j_WRXRMmO4d4Fa12x7M',
  authDomain: 'vue3-vuetify-and-others.firebaseapp.com',
  projectId: 'vue3-vuetify-and-others',
  storageBucket: 'vue3-vuetify-and-others.appspot.com',
  messagingSenderId: '1023240298755',
  appId: '1:1023240298755:web:7ddfc5e33d4c8af69d0936',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
