import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
function SignUp() {
  const [logindetails, setLoginDetails] = useState({
    username: '',
    password: ''
  });
  
  // const handleReset = () =>{
  //   setLoginDetails({
  //     username: '',
  //     password: ''
  //   });
  // }

  const handleForm = (event) => {
    event.preventDefault();
    // Sign up logic here
    console.log(logindetails);
    if(logindetails.username.trim() == "" || logindetails.password.trim()==""){
      console.log("error username");
    }

    //submit the data to server
    axios.post('http://localhost:8080/register',{logindetails})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  };

  return (
    <>
    <form onSubmit={handleForm}>
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md shadow-xl shadow-zinc-800 mt-[-105px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
          <CardDescription className="text-center">
            Create an account to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2 text-start">
            <Label htmlFor="username" className="text-start">Username</Label>
            <Input 
              id="username" 
              placeholder="Choose a username" 
              value={logindetails.username} 
              onChange={(e) => setLoginDetails({
                ...logindetails, 
                username: e.target.value
              })} 
            />
          </div>

          <div className="space-y-2 text-start">
            <Label htmlFor="password" className="text-start">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Choose a password" 
              value={logindetails.password}
              onChange={(e) => setLoginDetails({
                ...logindetails, 
                password: e.target.value
              })}
            />
          </div>
          <div className='flex flex-1'>
            <p>Already have an account?</p>
            <Link to="/Login" className='text-blue-500 pl-3 '>Login</Link>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" >Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
    </form>
    </>
  );
}

export default SignUp;
