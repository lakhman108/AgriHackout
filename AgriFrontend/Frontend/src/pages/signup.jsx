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
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function SignUp() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault()
      // Sign up logic here
       navigate('/Login');
    }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md shadow-xl shadow-zinc-800 mt-[-105px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
          <CardDescription className="text-center">
            Create an account to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2 text-start" >
            <Label htmlFor="username" className="text-start">Username</Label>
            <Input id="username" placeholder="Choose a username" />
          </div>
          <div className="space-y-2 text-start">
            <Label htmlFor="email" className="text-start">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2 text-start">
            <Label htmlFor="password" className="text-start">Password</Label>
            <Input id="password" type="password" placeholder="Choose a password" />
          </div>
        <div className='flex flex-1'>
          <p>Already have a account ?</p><Link to="/Login" className='text-blue-500 pl-3 '>Login</Link>
        </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignUp