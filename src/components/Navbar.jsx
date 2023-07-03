import { Link } from "react-router-dom";

const Navbar = () => {
  const url = (
    <>
      <Link className="hover:text-pink-500 hover:transition-all hover:duration-300 duration-300 transition-all">
        Home
      </Link>

      <Link className="hover:text-pink-500 hover:transition-all hover:duration-300 duration-300 transition-all">
        About Us
      </Link>

      <Link className="hover:text-pink-500 hover:transition-all hover:duration-300 duration-300 transition-all">
        Contact Us
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-5 z-50"
          >
            {url}
          </ul>
        </div>
        <Link to="/" className="font-black text-3xl">Pinak Celebrity</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 font-bold">{url}</ul>
      </div>
      <div className="navbar-end hidden">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
