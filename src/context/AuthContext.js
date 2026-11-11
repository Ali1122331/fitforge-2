
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("fitforgeUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("fitforgeUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("fitforgeUser");
    }
  }, [user]);

  const login = (email) => {
    const name = email.split("@")[0];
    setUser({ name: name, email: email });
  };

  const register = (name, email) => {
    setUser({ name: name, email: email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
