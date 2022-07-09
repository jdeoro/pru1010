import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../firebase/config";

// el authcontext.provider permite usar los objetos puestos en su value
// pero el que contiene esos valores es el authcontext
export const authContext = createContext();

export const useAuth = () => {
  // este contexto es el que tiene la informacion del provider
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const user = {
    login: false,
    name: "noname",
  };

  const signup = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const login = async (email, password) => {
    const userCrentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsuario(currentUser);
    });

    return () => unsubscribe();
  }, []);
  return (
    <authContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        usuario,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {" "}
      {children}{" "}
    </authContext.Provider>
  );
}
