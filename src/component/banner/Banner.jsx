import { FaSearch } from "react-icons/fa";

export default function Banner() {
  return (
    <>
      <div className="block sm:px-14 px-14 sm:py-20 py-20">
        <div className="flex justify-around items-center gap-28 flex-col sm:flex-row">
          <img
            src="../../../public/b2.png"
            alt="bannerimg"
            className="w-[500px] h-[500px]"
          />
          {/* texte */}
          <div className="flex flex-col gap-5 sm:py-12 py-12">
            <h1 className="text-slate-200 text-start font-extrabold text-4xl max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              corporis temporibus illum minus?{" "}
            </h1>
            <p className="text-slate-500 font-medium text-balance max-w-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              placeat sint tempora.
            </p>
            <div className="flex my-5 sm:my-5">
              <input
                type="mail"
                placeholder="exemple@gmail.com"
                className="sm:px-3 px-3 sm:py-2 rounded-l-md text-slate-400 sm:w-full w-full py-2 outline outline-0 focus:outline-0 bg-slate-700"
              />
              <button
                className="sm:px-2 px-2 sm:py-2 py-2 bg-blue-400 rounded-r-md"
                type="submit"
              >
                <FaSearch className="text-slate-200 text-xl font-semibold" />
              </button>
            </div>
            <div className="flex space-x-1 my-3 sm:my-3">
              <div className="flex">
                <img
                  src="../../../public/moi.png"
                  alt="1"
                  className=" rounded-full w-8 h-8 bg-slate-300"
                />
                <img
                  src="../../../public/12.png"
                  alt="1"
                  className=" rounded-full w-8 h-8  -mx-4"
                />
                <img
                  src="../../../public/13.png"
                  alt="1"
                  className=" rounded-full w-8 h-8 "
                />
              </div>
              <p className="font-normal text-sm text-slate-300 pt-2">
                +500K abonnés, nous ont faits confiance{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
