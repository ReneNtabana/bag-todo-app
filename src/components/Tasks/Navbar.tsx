import Link from "next/link";
import { Home, CircleDashed, CheckCircle } from "lucide-react";

const SideNavbar = () => {
  return (
    <div className="side-navbar fixed top-0 left-0 h-[100%] bg-white w-[18%] pt-10 rounded-tr-3xl rounded-br-3xl shadow-2xl shadow-r-xl">
      <div className="text-3xl border-b-2 border-black mb-10 pb-2 cursor-pointer">
        Dashboard
      </div>
      <div className="flex flex-col gap-6 ml-7">
        <Link
          href="/"
          className=" hover:bg-black rounded-xl hover:text-white text-2xl flex flex-row gap-1 mr-4 p-2"
        >
          <Home className="mt-1" />
          Home
        </Link>
        <Link
          href="Pending"
          className="  hover:bg-black rounded-xl hover:text-white text-2xl flex flex-row gap-1 mr-4 p-2"
        >
          <CircleDashed className="mt-1" />
          Pending
        </Link>
        <Link
          href="Completed"
          className="  hover:bg-black rounded-xl hover:text-white text-2xl flex flex-row gap-1 mr-4 p-2"
        >
          <CheckCircle className="mt-1" />
          Completed
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
