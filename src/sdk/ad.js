"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const AdScript = () => {
  const params = useSearchParams();
  const free = params.get("secret") === "see you space cowboy";

  useEffect(() => {
    if (!free) {
      // Primeiro script
      const script1 = document.createElement("script");
      script1.src = "https://bvtpk.com/tag.min.js";
      script1.setAttribute("data-zone", "9387111");
      (document.body || document.documentElement).appendChild(script1);

      // Segundo script
      const script2 = document.createElement("script");
      script2.src = "https://wugroansaghadry.com/401/9387122";
      try {
        (document.body || document.documentElement).appendChild(script2);
      } catch (e) {
        console.error("Erro ao adicionar o segundo script de anúncio", e);
      }
    }
  }, [free]);

  return null;
};

AdScript.displayName = "AdScript";
