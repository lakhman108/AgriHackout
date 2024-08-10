import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
const Header = () =>{
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
            <div>
            <h1 class="text-4xl font-bold text-green-800">
            Crop<span class="text-green-500">Care</span>
            </h1>
            </div>
            <div>
            <Link to={isSignUpPage ? "/login" : "/signup"}>
                <Button>{isSignUpPage ? "Login" : "Sign Up"}</Button>
            </Link>
            </div>
        </nav>
       </> 
    )
}

export default Header;