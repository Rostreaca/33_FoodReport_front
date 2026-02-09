import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    memberNo: null,
    email: null,
    nickname: null,
    phone: null,
    accessToken: null,
    refreshToken: null,
    role: null,
    isAuthenticated: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  // 자동로그인 구현을 위한 useEffect
  useEffect(() => {
    const memberNo = localStorage.getItem("memberNo");
    const email = localStorage.getItem("email");
    const nickname = localStorage.getItem("nickname");
    const phone = localStorage.getItem("phone");
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const role = localStorage.getItem("role");

    if (memberNo && email && nickname && accessToken && refreshToken && role) {
      setAuth({
        memberNo,
        email,
        nickname,
        phone,
        accessToken,
        refreshToken,
        role,
        isAuthenticated: true,
      });
    }
    setIsLoading(false);
  }, []);

  // 로그인에 성공했을 때 수행할 함수
  const login = (memberNo, email, nickname, phone, accessToken, refreshToken, role) => {
    setAuth({
      memberNo,
      email,
      nickname,
      phone,
      accessToken,
      refreshToken,
      role,
      isAuthenticated: true,
    });

    localStorage.setItem("memberNo", memberNo);
    localStorage.setItem("email", email);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("phone", phone);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("role", role);
  };

  const logout = () => {
    setAuth({
      memberNo: null,
      email: null,
      nickname: null,
      phone: null,
      accessToken: null,
      refreshToken: null,
      role: null,
      isAuthenticated: false,
    });

    localStorage.removeItem("memberNo");
    localStorage.removeItem("email");
    localStorage.removeItem("nickname");
    localStorage.removeItem("phone");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};