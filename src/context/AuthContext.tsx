import { createContext, useState, ReactNode, useEffect } from "react";
import { AuthType } from "@/interfaces";

export const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      // handle logout or token cleanup
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
