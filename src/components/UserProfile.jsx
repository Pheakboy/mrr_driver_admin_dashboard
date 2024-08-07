import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

// this is the logout api
const LOGOUT_API_URL = "http://ec2-54-82-25-173.compute-1.amazonaws.com:8000/api/users/logout";

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await fetch(LOGOUT_API_URL, {
        method: 'POST',
        credentials: 'include', // Include cookies with the request
      });

      if (response.ok) {
        // Call the logout function from auth context
        logout();

        // Redirect to login page
        navigate("/login");
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">Mr. Admin</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">Administrator</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">Admin@admin.com</p>
        </div>
      </div>
      {/* button LogOut */}
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default UserProfile;
