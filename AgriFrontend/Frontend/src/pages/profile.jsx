import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

function Profile() {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    // Retrieve the values from cookies
    const username = Cookies.get('userName');
    const password = Cookies.get('passWord');

    // Update the state with the retrieved values
    setUserData({ username, password });
  }, []);

  const handleLogout = () => {
    // Clear the cookies
    Cookies.remove('authToken');
    Cookies.remove('userName');
    Cookies.remove('passWord');

    // Redirect to the login page (or any other page)
    window.location.href = '/login'; // Adjust the path to your login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md shadow-xl shadow-zinc-800 mt-[-240px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">User Profile</CardTitle>
          <CardDescription className="text-center">
            Users Details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2 text-start">
            <h1>Username : {userData.username}</h1>
          </div>

          <div className="space-y-2 text-start text-white">
            <h1>Password : {userData.password}</h1>
          </div>
        </CardContent>
        <CardFooter>
          <button onClick={handleLogout} className="w-full bg-red-500 text-white p-2 rounded mt-4">
            Logout
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Profile;
