import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext(null);

const useFetchUserData = () => {
  const [user, setUser] = useState(null);

  const user_id = Cookies.get("user_id");

  useEffect(() => {
    if (!user_id) {
      return;
    }

    fetch(`/api/users/${user_id}`)
      .then((res) => {
        if (!res.ok) {
          return { success: false, message: "Request failed" };
        }
        return res.json();
      })
      .then((dataObject) => {
        setUser(dataObject.data);
      });
  }, [user_id]);

  const logout = () => {
    fetch(`/api/logout`, { method: "POST" })
      .then((res) => res.json())
      .then(() => setUser(null));
  };

  const login = (email, password) => {
    return fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json())
    .then((dataObject)  => {
        console.log(dataObject)
        return setUser(dataObject.data)
      })
  };

  return {
    user,
    logout,
    login,
  };
};

export const useUser = () => {
  return useContext(UserContext);
}

export const UserProvider = (props) => {
    const user = useFetchUserData();

    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}
