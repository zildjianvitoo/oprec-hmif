"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchCalonStaff } from "@/lib/api";

export default function TableCalonStaff() {
  const [calonStaff, setCalonStaff] = useState<any>([]);

  const dinasName = usePathname().split("/")[2];

  useEffect(() => {
    const getCalonStaff = async () => {
      console.log(dinasName);
      if (dinasName) {
        const response = await fetchCalonStaff(dinasName);
        setCalonStaff(response);
      }
    };
    getCalonStaff();
  }, [dinasName]);
  return (
    <Table className="mx-auto my-5">
      <TableHeader>
        <TableRow className="">
          <TableHead className="">No</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead colSpan={10}>NIM</TableHead>
          <TableHead colSpan={14}>Divisi 1</TableHead>
          <TableHead colSpan={15}>Divisi 2</TableHead>
          <TableHead className="text-center">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {calonStaff.map((staff: CalonStaff, index: number) => (
          <TableRow key={staff.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{staff.name}</TableCell>
            <TableCell colSpan={10}>{staff.nim}</TableCell>
            <TableCell colSpan={14}>{staff.divisions[0]}</TableCell>
            <TableCell colSpan={14}>{staff.divisions[1]}</TableCell>
            <TableCell colSpan={14} className="">
              <Link
                href={`/dashboard/${dinasName}/${staff.id}`}
                className="px-5 py-1 rounded-lg cursor-pointer bg-emerald-600"
              >
                Detail
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
