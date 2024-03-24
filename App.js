import React, {useEffect, useState} from 'react';
import AppNavigation from './src/config/navigationSetup';
import AppContext from './src/store/authStore';
import CustomSpinner from './src/components/CustomSpinner';

import AsyncStorageHelper from './src/config/asyncHelper';
import {Provider} from 'react-redux';
import rootStore from './src/store/initReduxxStore';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rehydrated, setRehydrated] = useState(false);

  const fetchUserAuthInfo = async () => {
    const userLoggedIn = await AsyncStorageHelper.getItem('user');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
    setRehydrated(true);
  };

  useEffect(() => {
    fetchUserAuthInfo();
  }, []);

  // Auth Context
  const userSignIn = () => {
    setIsLoggedIn(true);
  };
  if (!rehydrated) {
    return <CustomSpinner visible={true} />;
  }
  return (
    <AppContext.Provider value={{isLoggedIn: isLoggedIn, signIn: userSignIn}}>
      <Provider store={rootStore}>
        <AppNavigation />
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
