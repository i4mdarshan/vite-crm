import { ConstantStringsProvider } from "./ConstantStringsContext";
import { AuthProvider } from "./AuthContext";

const GlobalAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ConstantStringsProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ConstantStringsProvider>
  );
};

export default GlobalAppProvider;
