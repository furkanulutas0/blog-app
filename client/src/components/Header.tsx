import { Link, useLocation } from "react-router-dom";
import { signOutSuccess } from "../redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";

export function Header() {
  const location = useLocation();
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(signOutSuccess());
  };
  return (
    <>
      <div className="flex justify-between bg-[#02A28F] py-6">
        <div>
          <Link to={"/"}>
            <span className="px-32 text-xl font-bold text-white">
              LOOP Blog
            </span>
          </Link>
        </div>
        <p className="text-white">
          Hoş geldin,
          <span className="font-semibold"> {currentUser?.name}</span>
        </p>
        <div className="flex px-32 text-lg font-semibold">
          <div className="px-4">
            <Link
              to="/"
              className={`text-white ${
                location.pathname === "/" ? "text-[#005e53]" : ""
              }`}
            >
              Home
            </Link>
          </div>
          <div className="px-4">
            <Link
              to="/blog"
              className={`text-white  ${
                location.pathname.includes("/blog") ? "text-[#005e53]" : ""
              }`}
            >
              Blog
            </Link>
          </div>
          <div className="px-4">
            <Link
              to="/contact"
              className={`text-white ${
                location.pathname.includes("/contact") ? "text-[#005e53]" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          <button
            onClick={handleSignOut}
            className="rounded-xl bg-green-200 px-4 transition-all ease-in hover:bg-green-300"
          >
            <Link to="/login" className={`text-black`}>
              {currentUser ? "Logout" : "Login"}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
