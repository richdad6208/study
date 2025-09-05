"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);
  const observe = new IntersectionObserver(() => console.log("hi"), {
    root: ref.current,
  });

  useEffect(() => {
    if (ref.current) observe.observe(ref.current);
  }, []);

  return (
    <div className="h-[300dvh] relative">
      <img loading="lazy" src="/file.svg" alt="" className="w-10 h-10" />
      page
      <div ref={ref} className="absolute bottom-0 w-10 h-10 bg-black"></div>
    </div>
  );
}
