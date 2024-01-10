import React from "react";

type Props = {
  date: string;
  title: string;
  description: string;
};

export default function TimelineCard({ date, description, title }: Props) {
  return (
    <div className="w-[calc(100%)] md:w-[calc(50%-2.5rem)]  p-4 rounded shadow timeline-card ">
      <div className="flex items-center justify-between space-x-2 mb-1">
        <div className="font-bold text-white/80">{title}</div>
        <time className="font-caveat font-medium text-violet-500">{date}</time>
      </div>
      <div className="text-slate-500 font-medium">{description}</div>
    </div>
  );
}
