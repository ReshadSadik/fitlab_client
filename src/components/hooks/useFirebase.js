import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../../Authentication/Firebase/firebase.init';

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [error, setError] = useState('');

  //--------------- google sign in start------------//
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        // setUsers(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //---------------- google sign in end------------//

  //------------  create user with email password start----------//

  const getRegisterEmailPassword = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // setUsers({});
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
    setUserName(name);
  };

  const setUserName = (name) => {
    //   update userName
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  //------------ create user with email end----------//

  //   sign in with email pass start
  const getLoginEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUsers(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //   sign in with email pass end

  //  ---------- authenticate user start----------//
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
      }
    });
  }, []);
  //----------   authenticate user end-------------//-

  //------------   sign out users start----------//

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  //------------   sign out users end----------//

  return {
    googleSignIn,
    signOutUser,
    getRegisterEmailPassword,
    getLoginEmailPassword,
    users,
    error,
    setError,
  };
};

export default useFirebase;
