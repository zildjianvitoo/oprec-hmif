"use client";
import DinasCard from "@/components/atoms/DinasCard";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

export default function Dashboard() {
  const [user, setUser] = useState({ email: "" });

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email ? user.email : "" });
        console.log(user);
      } else {
        router.push("/");
      }
    });
  }, []);

  return (
    <div className="flex gap-x-6 gap-y-6 flex-wrap justify-center px-14">
      <DinasCard title="Pendaftar" registrant={3} iconBgColor="bg-sky-500" />
      <DinasCard title="Pendaftar" registrant={3} iconBgColor="bg-amber-500" />
      <DinasCard title="Pendaftar" registrant={3} iconBgColor="bg-lime-500" />
      <DinasCard
        title="Pendaftar"
        registrant={3}
        iconBgColor="bg-emerald-500"
      />
      <DinasCard title="Pendaftar" registrant={3} iconBgColor="bg-cyan-500" />
      <DinasCard title="Pendaftar" registrant={3} iconBgColor="bg-pink-500" />
      <DinasCard title="Pendaftar" registrant={3} iconBgColor="bg-indigo-500" />
      <DinasCard title="Pendaftar" registrant={3} iconBgColor="bg-purple-500" />
      <DinasCard title="Pendaftar" registrant={3} iconBgColor="bg-violet-500" />
      <DinasCard title="Pendaftar" registrant={3} iconBgColor="bg-red-500" />
    </div>
  );
}
