import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="py-6 bg-emerald-950">
      <div className="container mx-auto px-8 flex justify-between items-center">
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
            className="flex items-center text-emerald-500 px-3 font-bold hover:cursor-pointer hover:bg-emerald-500 hover:text-white"
          >
            Sign In
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Header;
