import React from 'react'
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
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();

    const handleSubmit  = (event) =>{
        event.preventDefault()

        navigate('/');
    }
  return (
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
            <Input id="username" placeholder="Enter your username" />
          </div>
          <div className="space-y-2 text-start">
            <Label htmlFor="email" className="text-start">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2 text-start">
            <Label htmlFor="password" className="text-start">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <div className='flex flex-1'>
          <p>Don't have a account ?</p><Link to="/SignUp" className='text-blue-500 pl-3 '>SignUp</Link>
        </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>Log in</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login