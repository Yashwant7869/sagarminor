import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/profile')
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  );
};
