"use client";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

  return <div>page</div>;
}
