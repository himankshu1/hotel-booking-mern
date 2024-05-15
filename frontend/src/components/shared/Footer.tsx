import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-emerald-950 text-slate-100 py-16">
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

        <div className="flex gap-8 text-sm text-slate-200">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
