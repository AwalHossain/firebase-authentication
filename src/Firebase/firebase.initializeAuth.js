import firebaseConfig from "./firebase.config"
import {initializeApp} from 'firebase/app'

const initailizeAuth =()=>{
    initializeApp(firebaseConfig)
}

export default initailizeAuth;