import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Hero from "@/components/shared/Hero";
import Footer from "@/components/shared/Footer";

// interface Props {
//   children: React.ReactNode;
// }

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
