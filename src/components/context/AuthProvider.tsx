import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { auth } from "../../firebase/config";

type TAuthContextProps = {
  user: User | null;
  logIn: (email: string, password: string, target: string) => Promise<void>;
  signUp: (email: string, password: string, target: string) => Promise<void>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<TAuthContextProps>({
  user: null,
  logIn: async () => {},
  signUp: async () => {},
  logOut: async () => {},
});
export const useAuth = () => useContext(AuthContext);

type TAuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: TAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const logIn = async (email: string, password: string, target: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(target || "/games/numbers");
    } catch (error) {
      console.log(error);
    }
  };
  
  const signUp = async (email: string, password: string, target: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(target || "/games/numbers");
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUser(currentUser) : setUser(null);
    });
  }, []);

  const authContextValue = {
    user,
    logIn,
    logOut,
    signUp,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
