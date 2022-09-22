import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userLoginData } from "../../context/usersData";

export const UserProfileContext = React.createContext();

const UserProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(userLoginData);
  const obj = { profileData, setProfileData };
  return <UserProfileContext.Provider value={obj}>{children}</UserProfileContext.Provider>;
};

export default UserProfileDataProvider;
