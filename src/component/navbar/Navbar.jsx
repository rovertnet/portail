import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";


export default function Navbar() {
  return (
    <>
      <div className="block border-b-2 border-slate-500 sm:px-14 px-14 sm:py-6 py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl sm:text-lg font-bold">Elearning</h1>

          {/* items menu */}
          <div className="flex justify-center items-center gap-3">
            <ul className=" flex justify-center items-center gap-5 text-xl text-slate-200">
              <li>Element</li>
              <li>Element</li>
              <li>Element</li>
              <li>Element</li>
            </ul>
            <IoMdSunny className="text-2xl text-slate-200" />
            <FaRegUserCircle className="text-2xl text-slate-200" />
          </div>
        </div>
      </div>
    </>
  );
}
