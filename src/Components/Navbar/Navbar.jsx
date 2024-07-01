import "../Navbar/navbar.css";
import logo from "../../icons/logo.png";

export default function Navbar() {
  const showNav = (e) => {
    const ul = document.getElementById("main_nav_items");
    if (ul.style.display === "none" || ul.style.display === "") {
      ul.style.display = "flex";
    } else {
      ul.style.display = "none";
    }
  };

  return (
    <>
      <nav className="relative bg-black text-white flex justify-between items-center gap-2 px-12 py-3 text-md md:text-lg">
        <img src={logo} alt="gym logo" className="w-[120px]" />
        <ul id="main_nav_items" className="hidden absolute top-[67px] left-0 bg-black w-full md:relative md:top-[0] p-2 md:flex flex-col md:flex-row justify-end items-center gap-4 md:gap-8 ">
          <li className="dropdown p-2">
            Why Us
            <ul className="text-black flex flex-col justify-center items-center gap-2 p-1 rounded-lg bg-gray-100">
              <a href="/">
                <li className="hover:bg-slate-200 w-full py-1 px-6 rounded-md">
                  Why Us
                </li>
              </a>
              <a href="/">
                <li className="hover:bg-slate-200 w-full py-1 px-6 rounded-md">
                  Classes
                </li>
              </a>
              <a href="/">
                <li className="hover:bg-slate-200 w-full py-1 px-6 rounded-md">
                  Trainers
                </li>
              </a>
              <a href="/">
                <li className="hover:bg-slate-200 w-full py-1 px-6 rounded-md">
                  Facilities
                </li>
              </a>
            </ul>
          </li>
          <li className="dropdown p-2">
            Membership
            <ul className="text-black flex flex-col justify-center items-center gap-2 p-1 rounded-lg bg-gray-100">
              <a href="/">
                <li className="hover:bg-slate-200 w-full py-1 px-6 rounded-md">
                  Membership
                </li>
              </a>
              <a href="/">
                <li className="hover:bg-slate-200 w-full py-1 px-6 rounded-md">
                  Pricing
                </li>
              </a>
            </ul>
          </li>
          <a href="/">
            <li className="hover:bg-gray-800 focus:bg-gray-800 p-2 rounded-md focus:ring-1 active:ring-1 ring-gray-700 ring-offset-2">Promotions</li>
          </a>
          <a href="/">
            <li className="hover:bg-gray-800 focus:bg-gray-800 p-2 rounded-md focus:ring-1 active:ring-1 ring-gray-700 ring-offset-2">Blog</li>
          </a>
          <a href="/">
            <li className="hover:bg-gray-800 focus:bg-gray-800 p-2 rounded-md focus:ring-1 active:ring-1 ring-gray-700 ring-offset-2">Contact</li>
          </a>
          <a href="/">
            <li className="bg-gray-800 focus:bg-gray-800 p-2 rounded-md focus:ring-1 active:ring-1 ring-gray-700 ring-offset-2">Join Now</li>
          </a>
        </ul>
        <div
          className="md:hidden hamburger flex flex-col gap-2"
          onClick={showNav}
        >
          <span className="bg-white w-[40px] h-[3px] block"></span>
          <span className="bg-white w-[40px] h-[3px] block"></span>
          <span className="bg-white w-[40px] h-[3px] block"></span>
        </div>
      </nav>
    </>
  );
}
