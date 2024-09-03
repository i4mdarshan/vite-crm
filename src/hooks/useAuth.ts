import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { AuthType } from "@/interfaces";

export const useAuth = (): AuthType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
