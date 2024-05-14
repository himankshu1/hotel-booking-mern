import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6 bg-emerald-950">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center cursor-pointer gap-1">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <span className="">
            <Link
              to="/"
              className="text-emerald-500 font-semibold tracking-tight text-2xl"
            >
              Nest.
            </Link>
          </span>
        </div>

        {/* login button */}
        <span className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => navigate("/sign-in")}
            className="flex items-center text-emerald-600 px-3 font-bold hover:cursor-pointer hover:bg-emerald-500 hover:text-white gap-2"
          >
            <LogIn />
            Sign In
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Header;
