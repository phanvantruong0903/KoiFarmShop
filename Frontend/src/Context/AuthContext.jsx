import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = async (email, password) => {
    return null
  };

  // Function to sign in with Google
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return null
  };

  // Function to sign out
  const signOutUser = async () => {
    return null
  };

  // Set up an effect to handle authentication state changes
  

  // Provide the authentication state and functions to children components
  const value = {
    currentUser,
    signIn,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
