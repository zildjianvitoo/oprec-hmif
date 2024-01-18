"use client";
import { ReactNode, useEffect, useState } from "react";

type Props = { children: ReactNode };

export default function NoSSR({ children }: Props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [loading]);

  return loading ? <> {children} </> : null;
}
