import React from 'react';
import icon from '../../assets/img2.jpg';
import { GenderContext } from '../../../../contextApi/src/context/NamegenderContext';

// Create a context for the profile
export const ProfileContext = React.createContext();

function UserContext({ children }) {
  const profile = icon;

  return (
    <GenderContext.Provider value={"male" /* or any gender value */}>
      <ProfileContext.Provider value={profile}>
        {children}
      </ProfileContext.Provider>
    </GenderContext.Provider>
  );
}

export default UserContext;
 