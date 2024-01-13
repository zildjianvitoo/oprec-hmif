"use client";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "@/components/ui/sheet";
import { MdDashboard, MdVerifiedUser } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import LogoutButton from "../atoms/LogoutButton";
type Props = {};

export default function MobileSidebar({}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild className=" z-20  md:hidden">
        <RxHamburgerMenu className="text-3xl  absolute text-white ml-4 mt-[18px]  z-[50]" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className=" flex-col bg-[#03001417] shadow-2xl shadow-[#2A0E61]/50  px-5   mx-auto"
      >
        <div className="flex items-center sidebar-dashboard-item rounded-md px-3 py-2   justify-start gap-2 text-xl text-slate-200 mt-5 cursor-pointer">
          <MdDashboard />
          <p className=""> Dashboard</p>
        </div>
        <div className="flex items-center justify-start sidebar-dashboard-item rounded-md px-3 py-2  gap-2 text-xl text-slate-200 mt-5 cursor-pointer">
          <FaUsers />
          <p className=""> Pendaftar</p>
        </div>
        <div className="flex items-center  justify-start sidebar-dashboard-item rounded-md px-3 py-2 gap-2 text-xl text-slate-200 mt-5 cursor-pointer">
          <MdVerifiedUser />
          <p className=""> Diterima</p>
        </div>
        <hr className="h-2 text-slate-300 mt-5" />
        <LogoutButton />
      </SheetContent>
    </Sheet>
  );
}
