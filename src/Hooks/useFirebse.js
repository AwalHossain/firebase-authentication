import { GoogleAuthProvider,signOut, onAuthStateChanged, getAuth,signInWithPopup  } from "firebase/auth";
import initializeAuth from '../Firebase/firebase.initializeAuth';
import { useEffect, useState } from "react";

initializeAuth();

const useFirebase =()=>{
    //React Hooks
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth= getAuth();
 const signInWithgoogle =()=>{
    signInWithPopup(auth, googleProvider)
    .then(result => {
        console.log(result.user.email);
        setUser(result.user);
    })
    .catch(error => {
        setError(error.message);
    })
}
const logOut= ()=>{
    signOut(auth)
    .then(()=>{
        setUser({})
    })

}
useEffect(()=>{
    onAuthStateChanged(auth, user=>{
        if(user){
            console.log("inside state changed", user);
            setUser(user)
        }
    })
},[])
    return {
        logOut,
        user,
        signInWithgoogle,
        error
    }
}

export default useFirebase;