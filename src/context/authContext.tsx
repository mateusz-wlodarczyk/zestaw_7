import React, { createContext, useContext, useState } from "react";

type AuthContextProps = {
  isLogin: boolean;
  // loggedUser: unknown;
  loginUser: () => void;
  logoutUser: () => void;
};

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const loginUser = () => {
    setIsLogin(true);
  };

  const logoutUser = async function () {
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, loginUser, logoutUser }}>
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
