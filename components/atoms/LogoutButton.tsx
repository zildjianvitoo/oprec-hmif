"use client";
import { IoLogOutOutline } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const signOutHandler = async () => {
    try {
      await signOut(auth);
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex gap-2 items-center cursor-pointer text-xl rounded-md px-3 py-2 hover:bg-red-900"
      onClick={signOutHandler}
    >
      <IoLogOutOutline className="text-slate-200 text-2xl " />
      <p className="text-slate-300 font-semibold cursor-pointer">Logout</p>
    </div>
  );
}
