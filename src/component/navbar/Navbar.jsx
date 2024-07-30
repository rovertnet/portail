import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";


export default function Navbar() {
  return (
    <>
      <div className="block backdrop-blur-md bg-slate-900/30 border-b-[0.1px] border-slate-700 sm:px-14 px-14 sm:py-2 py-2 shadow-md fixed top-0 right-0 left-0">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl sm:text-lg font-bold">Elearning</h1>

          {/* items menu */}
          <div className="flex justify-center items-center gap-3">
            <ul className=" flex justify-center items-center gap-5 text-xl text-slate-400">
              <li>Accueil</li>
              <li>Cours</li>
              <li>A propos</li>
              <li>Faq</li>
            </ul>
            <IoMdSunny className="text-xl text-slate-400" />
            <FaRegUserCircle className="text-2xl text-slate-400" />
          </div>
        </div>
      </div>
    </>
  );
}
