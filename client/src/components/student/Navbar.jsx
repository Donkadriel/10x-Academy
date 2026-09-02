import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Navbar = () => {

  const {navigate, isEducator, setIsEducator} = useContext(AppContext)
  const isCourseListPage = location.pathname.includes("/course-list");
  const { user } = useUser();

  return (
    <div
      className={`flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 border-b border-body fixed w-full z-30  py-4 ${isCourseListPage ? "bg-surface" : "bg-navbar-bg"}`}
    >
      <img onClick={()=> navigate('/')}
        src={assets.logo}
        alt="Logo"
        className="rounded-full cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-body">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={()=> {navigate('/educator')}}>{isEducator ? "Educator Dashboard" : "Become Educator"}</button>|
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <div className="flex items-center gap-2">
            <SignInButton>
              <button className="group flex items-center border border-primary md:h-[4dvh] text-primary px-5 py-2 rounded-full transition-all duration-300 ease-out hover:bg-primary hover:text-white hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:scale-95 active:shadow-md">
                <span className="relative z-10">Sign In</span>
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="group relative overflow-hidden flex items-center md:h-[4dvh] bg-primary text-white px-5 py-2 rounded-full transition-all duration-300 ease-out hover:bg-primary-dark hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:scale-95 active:shadow-md">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></span>
                <span className="relative z-10">Create Account</span>
              </button>
            </SignUpButton>
          </div>
        )}
      </div>
      {/* For phone Screens*/}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-body">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
               <button onClick={()=> {navigate('/educator')}}>{isEducator ? "Educator Dashboard" : "Become Educator"}</button>|
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <div className="flex items-center gap-1">
            <SignInButton>
              <button className="group text-xs border border-primary text-primary px-2 py-1 rounded-full transition-all duration-300 ease-out hover:bg-primary hover:text-white hover:shadow-[0_4px_15px_-3px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:scale-95">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="group relative overflow-hidden text-xs bg-primary text-white px-2 py-1 rounded-full transition-all duration-300 ease-out hover:bg-primary-dark hover:shadow-[0_4px_15px_-3px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:scale-95">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></span>
                <span className="relative z-10">Sign Up</span>
              </button>
            </SignUpButton>
          </div>
        )}
      </div>
    </div>
  );
};
