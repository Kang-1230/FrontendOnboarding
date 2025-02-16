export type AuthStore = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;

  id: string | null;
  setId: (id: string) => void;
  userName: string | null;
  setUserName: (userName: string) => void;
  nickname: string | null;
  setNickname: (nickname: string) => void;
  email: string | null;
  setEmail: (email: string) => void;
};
