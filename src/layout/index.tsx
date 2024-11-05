import { Outlet } from "react-router-dom";
import logo from "@/assets/logo.png"

export function Layout() {
  return (
    <div className="">
      <BrandHeader />
      <Outlet />
    </div>
  );
}

function BrandHeader() {
  return (
    <div className="">
      <img src={logo} alt="logo" className="h-32 w-auto" />
    </div>
  );
}
