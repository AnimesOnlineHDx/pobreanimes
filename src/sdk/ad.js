"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const AdScript = () => {
  const params = useSearchParams();
  const free = params.get("secret") === "see you space cowboy";

  useEffect(() => {
    if (!free) {
      const script = document.createElement("script");
      script.src = "https://bvtpk.com/tag.min.js";
      script.setAttribute("data-zone", "9387111");
      (document.body || document.documentElement).appendChild(script);
    }
  }, [free]);

  return null;
};

AdScript.displayName = "AdScript";
