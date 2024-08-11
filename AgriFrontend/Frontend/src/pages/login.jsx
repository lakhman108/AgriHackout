import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Ensure js-cookie is installed
import { toast } from 'react-toastify'; // Ensure react-toastify is installed
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
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [logindetails, setLoginDetails] = useState({
    username: '',
    password: ''
  });

  const handleFormData = async (event) => {
    event.preventDefault();

    const { username, password } = logindetails;
    const data = JSON.stringify({ username, password });

    const config = {
      method: 'post',
      url: 'http://3.80.176.177:8080/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    if (username.trim() !== "" && password.trim() !== "") {
      try {
        const response = await axios.request(config);
        const token = response.data; // Ensure token is returned as expected
        Cookies.set('authToken', token, { expires: 1 }); // Set cookie with expiration of 1 days
        // console.log('Auth Token:', Cookies.get('authToken')); // Corrected logging
        Cookies.set('userName',username,{expires:1});
        Cookies.set('passWord',password,{expires:1});
        navigate('/');
        toast.success('User Logged In Successfully', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message);
        toast.error('Login failed. Please try again.', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast.error('Please fill in all fields.', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <form onSubmit={handleFormData}>
      <div className="flex items-center justify-center min-h-screen mt-[-65px]">
        <Card className="w-full max-w-md shadow-2xl shadow-slate-700">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-start">
              <Label htmlFor="username" className="text-start">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={logindetails.username}
                onChange={(e) => setLoginDetails({ ...logindetails, username: e.target.value })}
              />
            </div>
            <div className="space-y-2 text-start">
              <Label htmlFor="password" className="text-start">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={logindetails.password}
                onChange={(e) => setLoginDetails({ ...logindetails, password: e.target.value })}
              />
            </div>
            <div className='flex flex-1'>
              <p>Don't have an account?</p>
              <Link to="/SignUp" className='text-blue-500 pl-3'>Sign Up</Link>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">Log In</Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}

export default Login;
