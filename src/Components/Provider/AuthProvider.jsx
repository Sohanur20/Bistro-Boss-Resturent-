/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../../firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";





export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {



  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

const signIn = (email , password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
    
} 

const googleSignIn = () =>{
setLoading(true)
return signInWithPopup(auth,googleProvider)

}

const logOut = () =>{
    setLoading(false)
    return signOut(auth)
}

const updateUserProfile = (name, photo) => {
  return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
  });
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                }
            })
    }else{
        // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
        localStorage.removeItem('access-token');
      }



      // console.log("current user", currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
