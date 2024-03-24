import React, {useState} from 'react';
import AppNavigation from './src/config/navigationSetup';
import AppContext from './src/store/authStore';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Auth Context
  const userSignIn = () => {
    setIsLoggedIn(true);
  };
  return (
    <AppContext.Provider value={{isLoggedIn: isLoggedIn, signIn: userSignIn}}>
      <AppNavigation />
    </AppContext.Provider>
  );
};

export default App;
