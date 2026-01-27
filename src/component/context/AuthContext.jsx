import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();
// 이 컨텍스트를 통해 인증관련 데이터를 하위 컴포넌트에 전달함

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    email: null,
    nickname: null,
    phone: null,
    accessToken: null,
    refreshToken: null,
    role: null,
    isAuthenticated: false,
  });

  // 자동로그인 구현을 위한 useEffect
  useEffect(() => {
    const email = localStorage.getItem("email");
    const nickname = localStorage.getItem("nickname");
    const phone = localStorage.getItem("phone")
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const role = localStorage.getItem("role");

    if (email && nickname && phone && accessToken && refreshToken && role) {
      setAuth({
        email,
        nickname,
        phone,
        accessToken,
        refreshToken,
        role,
        isAuthenticated: true,
      });
    }
  }, []);

  // 로그인에 성공했을 때 수행할 함수
  const login = (email, nickname, phone, accessToken, refreshToken, role) => {
    setAuth({
      email,
      nickname,
      phone,
      accessToken,
      refreshToken,
      role,
      isAuthenticated: true,
    });
    
      localStorage.setItem("email", email);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("phone", phone);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("role", role);
  };

  const logout = () => {
    setAuth({
      email: null,
      nickname: null,
      phone: null,
      accessToken: null,
      refreshToken: null,
      role: null,
      isAuthenticated: false,
    });
    localStorage.removeItem("email");
    localStorage.removeItem("nickname");
    localStorage.removeItem("phone");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
