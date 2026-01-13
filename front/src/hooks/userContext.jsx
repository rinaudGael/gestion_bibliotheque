import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Erreur lors du JSON.parse :", e);
        localStorage.removeItem("user"); // supprime les données corrompues
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
