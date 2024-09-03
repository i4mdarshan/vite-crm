export interface AuthType {
  token: string | null;
  setToken: (token: string | null) => void;
}
