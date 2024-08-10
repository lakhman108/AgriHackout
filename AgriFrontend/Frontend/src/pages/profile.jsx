import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useEffect } from 'react';
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
            <h1>password : {userData.password}</h1>
          </div>
          
        </CardContent>
       
      </Card>
    </div>
  )
}

export default Profile



