import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="flex">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <span className="text-emerald-500 font-semibold tracking-tight">
            <Link to="/">Nest.</Link>
          </span>
        </div>

        {/* login button */}
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center text-emerald-500 px-3 font-bold hover:cursor-pointer hover:text-emerald-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
