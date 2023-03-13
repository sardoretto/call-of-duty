import { Link } from "react-router-dom";

function Heder() {
  return (
    <header className="bg-gray-700 h-24  flex justify-between items-center text-white">
      <div className=" flex justify-between">
        <img src="/logo1.png" className="w-[80px] ml-6" />
        <div>
          <h1 className="mt-3 font-bold text-5xl">CALL OF DUTY</h1>
        </div>
      </div>

      <div>
        <Link
          to="/"
          className="font-semibold text-slate-300 hover:text-gray-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-semibold mx-3 text-slate-300 hover:text-gray-200"
        >
          About
        </Link>
      </div>
      <button className="w-[80px] h-[32px] bg-cyan-700 mr-8 text-white rounded-[10px]">
        Downold
      </button>
    </header>
  );
}

export default Heder;
