import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";



export default function Navbar() {

  const [menu, setMenu] = useState();
  const openMenu = () => {
    setMenu(!menu )
  }

  return (
    <>
      <div className="block backdrop-blur-md bg-slate-900/30 border-b-[0.1px] border-slate-700 sm:px-14 px-9 sm:py-2 py-5 shadow-md fixed top-0 right-0 left-0">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1 sm:space-x-2">
            <img
              src="../../../public/scool.jpeg"
              alt="logo"
              className="w-8 h-8"
            />
            <h1 className="text-white text-xl sm:text-lg font-bold">
              E-learning
            </h1>
          </div>

          {/* items menu */}
          <div className="flex justify-center items-center gap-3">
            <ul className=" sm:flex justify-center items-center hidden gap-5 text-xl text-slate-400">
              <li>Accueil</li>
              <li>Cours</li>
              <li>A propos</li>
              <li>Faq</li>
            </ul>
            <IoMdSunny className="text-xl text-slate-400" />
            <FaRegUserCircle className="text-2xl text-slate-400" />
            <button
              className="bg-slate-800 px-2 py-1 sm:hidden rounded-md hover:bg-slate-200 hover:text-slate-800 duration-300 ease-out"
              onClick={openMenu}
            >
              {menu ? (
                <RxCross1 className="text-2xl text-slate-400" />
              ) : (
                <HiMenuAlt4 className="text-2xl text-slate-400" />
              )}
            </button>
          </div>
        </div>

        {/* Open menu mobile */}
        <ul className={`sm:hidden gap-10 text-xl pt-8 text-slate-400 ${menu ? "text-center " : "hidden"}`}>
          <li className="hover:bg-slate-800 hover:text-slate-100 hover:p-2 hover:rounded-md pb-5">Accueil</li>
          <li className="hover:bg-slate-800 hover:text-slate-100 hover:p-2 hover:rounded-md pb-5">Cours</li>
          <li className="hover:bg-slate-800 hover:text-slate-100 hover:p-2 hover:rounded-md pb-5">A propos</li>
          <li className="hover:bg-slate-800 hover:text-slate-100 hover:p-2 hover:rounded-md ">Faq</li>
        </ul>
      </div>
    </>
  );
}
