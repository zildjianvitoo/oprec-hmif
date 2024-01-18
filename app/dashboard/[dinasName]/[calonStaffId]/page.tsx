import TableDetail from "@/components/molecules/TableDetail";
import React from "react";

type Props = {};

export default function Detail({}: Props) {
  return (
    <main className="flex items-center justify-center px-2 mx-auto lg:px-10">
      <div className="flex flex-col justify-center w-full px-5 py-10 mx-auto rounded-lg table-calon-staff">
        <h1 className="text-xl font-semibold lg:text-2xl text-slate-200">
          Calon Staff
        </h1>
        <TableDetail />
      </div>
    </main>
  );
}
