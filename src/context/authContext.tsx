import React, { createContext, useContext, useState } from "react";
import { supabase } from "../utils/supabase";
import { SingleUser } from "../utils/data";

type AuthContextProps = {
  loginUser: (loggedUser: SingleUser) => Promise<boolean>;
  logoutUser: () => void;
  registerNewUser: (newUser: SingleUser) => Promise<boolean>;
  isLogin: boolean;
};

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const loginUser = async (loggedUser: SingleUser) => {
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email: loggedUser.email,
        password: loggedUser.password,
      });
      if (data.user !== null) {
        setIsLogin(true);
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const registerNewUser = async (newUser: SingleUser) => {
    try {
      await supabase.auth.signUp({
        email: newUser.email,
        password: newUser.password,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      return false;
    }
  };
  const logoutUser = async function () {
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLogin, loginUser, logoutUser, registerNewUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("Poza providerem");
  }
  return ctx;
};

export { AuthContext, AuthProvider };
