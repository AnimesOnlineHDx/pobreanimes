"use client";
import { Suspense } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

export const AdScript = () => {
  const params = useSearchParams();
  const free = params.get("secret") === "see you space cowboy";

  return (
    <Suspense>
      {!free && (
        <>
          <Script
            strategy="afterInteractive"
            type="text/javascript"
            src="//pl22483504.highrevenuenetwork.com/2e/08/4a/2e084a7f0fbea06c76dc356f54df3830.js"
          ></Script>

          <Script
            strategy="beforeInteractive"
            data-id="101458500"
            src="//static.getclicky.com/js"
          ></Script>
        </>
      )}
    </Suspense>
  );
};

AdScript.displayName = "AdScript";
