import { register } from "module";
import React from "react";
import { FaUsers } from "react-icons/fa";

type Props = { title: string; registrant: number; iconBgColor: string };

export default function DinasCard({ title, registrant, iconBgColor }: Props) {
  return (
    <div className="flex cursor-pointer flex-col w-[250px] md:w-[275px] gap-4 dinas-box text-xl shadow-lg shadow-violet-100 rounded-lg p-6">
      <p className="text-slate-200  ">{title}</p>
      <div className="flex items-center gap-2 ">
        <div className={` rounded-full bg-sky-300 p-2 ${iconBgColor}`}>
          <FaUsers className="text-lg text-slate-100" />
        </div>
        <p className="text-slate-200">{registrant} Orang</p>
      </div>
    </div>
  );
}
