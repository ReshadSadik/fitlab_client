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
  const [isLoading, setIsLoading] = useState(true);

  //--------------- google sign in start------------//
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //---------------- google sign in end------------//

  //------------  create user with email password start----------//

  const getRegisterEmailPassword = (email, password, name) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        // const user = userCredential.user;
        // setUsers({});
        updateProfile(auth.currentUser, {
          displayName: name,
        }).catch((error) => {
          // An error occurred
          // ...
        });

        window.location.reload();
        // ...
      })

      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const setUserName = (name) => {
  //   //   update userName

  // };

  //------------ create user with email end----------//

  //   sign in with email pass start
  const getLoginEmailPassword = (email, password) => {
    setIsLoading(true);
    return (
      signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //   // Signed in
        //   const user = userCredential.user;
        //   setUsers(user);
        //   // ...
        // })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        })
        .finally(() => {
          setIsLoading(false);
        })
    );
  };
  //   sign in with email pass end

  //  ---------- authenticate user start----------//
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
  }, []);
  //----------   authenticate user end-------------//-

  //------------   sign out users start----------//

  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
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
    isLoading,
  };
};

export default useFirebase;
