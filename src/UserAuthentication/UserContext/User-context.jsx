import React, { useEffect, useState } from 'react';
import icon from '../../assets/img2.jpg';
import { GenderContext } from '../../../../contextApi/src/context/NamegenderContext';
import axios from 'axios';
import Loading from '../../Components/loading'

// Create a context for the profile
export const ProfileContext = React.createContext();

function UserContext({ children }) {
  const [userProfile, setuserProfile] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchAvatar = async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://randomuser.me/api')
        const imageUrl = response.data.results[0].picture.large
        setLoading(false)
        setuserProfile(imageUrl)
      }
      catch (error) {
        console.log('error fetching the image', error)
        setLoading(false)
        setError(true)
      }
    }
    fetchAvatar()
  }, [])
  const profile = (userProfile) ;
const cachtingerror = (error)
  return (
    
    <>
    {/* {error && <p>Error fetching Profile</p>} */}
    {loading && <Loading/>}
    <GenderContext.Provider value={"male"}>
      <ProfileContext.Provider value={{profile, cachtingerror}}>
        {children}
      </ProfileContext.Provider>
    </GenderContext.Provider>
    </>
  );
}

export default UserContext;
