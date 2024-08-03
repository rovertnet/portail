
export default function Herosection() {
  return (
    <>
      <div className=" pb-10 sm:pb-10 px-9">
        <h1 className="font-extrabold text-4xl  text-slate-50 text-center uppercase">
          cycles
        </h1>
        <p className="font-normal text-sm text-center text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="sm:px-14 px-9 my-7 sm:my-7 block">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className=" border-[0.1px] border-slate-700 rounded-md sm:px-8 px-8 sm:py-5 py-5">
            <h1 className="font-extrabold text-3xl text-white uppercase sm:pb-5 pb-5">
              La promotion
            </h1>
            <h2 className="font-semibold text-xl text-slate-400 max-w-md">
              {" "}
              Incidunt autem tempora perspiciatis iusto. Expedita corporis esse,
              quidem magni aut. Quo omnis, impedit nesciunt officiis ullam iure!
            </h2>
            <div className="flex justify-start items-center gap-5 sm:pt-10 pt-10">
              <button
                className="px-3 py-2 bg-blue-400 text-white text-xl rounded-md font-semibold hover:bg-blue-500"
                type="submit"
              >
                Promo
              </button>
              <button
                className="px-3 py-2 border-[0.1px] border-blue-400 text-blue-400 text-xl rounded-md font-semibold"
                type="submit"
              >
                Publicité
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className=" border-[0.1px] border-slate-700 rounded-md sm:px-8 px-8 sm:py-5 py-5 text-slate-200 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              molestiae iure commodi architecto aut suscipit voluptatum ab
              accusamus a autem, magnam, deserunt debitis ipsam similique
              dolorum totam. Nesciunt, inventore itaque.
            </div>
            <div className=" border-[0.1px] border-slate-700 rounded-md sm:px-8 px-8 sm:py-5 py-5 text-slate-200 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              asperiores quis, modi impedit magni qui totam consequuntur laborum
              tempore explicabo a saepe sit et ipsa repellendus, reiciendis
              aliquam magnam. Tempore.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
