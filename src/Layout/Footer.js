import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-700 flex justify-between  items-center gap-[60px] text-white h-20">
      <div>
        <h1 className="items-center mr-[12px] font-bold text-5xl">
          CALL OF DUTY MOBILE
        </h1>
      </div>
      <div className=" flex justify-end mr-6  gap-x-4 ">
        <div>
          <img src="/insta.jpeg" className="w-8 h-8 rounded-[10px] " />
        </div>

        <div>
          <img src="/face.png" className="w-8 h-8 rounded-[50px]" />
        </div>

        <div>
          <img src="/telegram.png" className="w-8 h-8 rounded-[30px]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
