import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const Header = () =>{
    const [islogged,setIsLogged] = useState();
    useEffect(()=>{
        const token = Cookies.get("authToken");
        console.log(token);
        if(token != undefined){
            setIsLogged(true);
        }else{
            setIsLogged(false);
        }
    })
    const location = useLocation();

    const isSignUpPage = location.pathname === '/signup';
    return (
        <>
        <nav className="py-4 flex justify-between items-center">
            <Link to="/">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/agriculture-worker-spraying-chemical-on-crop-2709832-2268438.png?f=webp" className="h-20" />
            </Link>
            {/* <div className="flex space-y-0">
                <div>
                    <Button variant="primary">AboutUs</Button>
                </div>
                <div>
                    <Button variant="primary">Blogs</Button>
                </div>
            </div> */}
            <div className="pr-3">
            <h1 className="text-4xl font-bold text-green-700">
            Crop<span className="text-green-500">Care</span>
            </h1>
            </div>
            <div>
            {islogged ?
            <Link to="/Profile"><img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-2606447-2184139.png?f=webp&w=256" className="h-16"/></Link>
            :
            <Link to={isSignUpPage ? "/login" : "/signup"}>
                <Button>{isSignUpPage ? "Login" : "Sign Up"}</Button>
            </Link>
            }
            </div>
        </nav>
       </> 
    )
}

export default Header;