import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="bg-gradient-to-r from-red-400 to-red-600  shadow-lg py-5">
      <div className="container mx-auto flex justify-between items-center flex-col lg:flex-row gap-5 lg:gap-0">
        
        {/* Logo */}
        <h2 className="text-3xl font-bold text-white">
          <NavLink to={"/"} className="hover:text-yellow-200">
            Food<span className="text-yellow-300">Recipe</span>
          </NavLink>
        </h2>
        
        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="w-full lg:w-auto">
          <div className="relative">
            <input
              type="text"
              name="search"
              value={searchParam}
              onChange={(event) => setSearchParam(event.target.value)}
              placeholder="Search recipes..."
              className="w-full lg:w-96 p-3 px-8 rounded-full bg-white/75 text-gray-800 outline-none shadow-lg focus:shadow-xl transition-all duration-300 ease-in-out"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition-colors duration-300"
            >
              🔍
            </button>
          </div>
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={"/"}
              className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
