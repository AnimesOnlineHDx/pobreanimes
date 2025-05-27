"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

import { useVideoStore } from "@/store/video";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const ListSkeleton = ({ length }) => {
  return (
    <div className="grid gap-y-12 grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length }).map((_, i) => (
        <div key={i} className="animate-pulse bg-muted rounded-t-lg h-72"></div>
      ))}
    </div>
  );
};

ListSkeleton.displayName = "ListSkeleton";

export const List = ({ title, data, error }) => {
  const { setURL } = useVideoStore();
  const [limit, setLimit] = useState(data?.length > 12 ? 12 : data?.length);

  const seeMore = useCallback(() => {
    setLimit((prev) => {
      const next = prev + 12;
      return next > data?.length ? data?.length : next;
    });
  }, [data?.length]);

  if (error) {
    return <p>Não encontrado</p>;
  }

  return (
    <section>
      <h2 className="mb-6 text-xl sm:text-2xl font-bold tracking-tight text-muted-foreground">
        {title}
      </h2>

      {!data?.length && (
        <p className="text-foreground">Nenhum resultado encontrado</p>
      )}

      {data?.length > 0 && (
        <div className="grid gap-y-12 grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {data?.slice(0, limit)?.map((item) => {
            const Action = item?.href ? Link : "div";
            const actionProps = item?.href
              ? { href: item?.href, prefetch: false }
              : {
                  onClick: () => setURL(item?.url),
                  className: "cursor-pointer",
                };

            return (
              <div
                className={cn(
                  "relative overflow-hidden rounded-t-lg flex flex-col gap-1",
                  actionProps?.className
                )}
                key={item?.id}
              >
                <Action {...actionProps} className="absolute inset-0 z-30">
                  <span className="sr-only">View Anime</span>
                </Action>
                <div className="relative overflow-hidden">
                  {item?.episode && (
                    <span className="absolute top-2 left-2 text-xs text-white bg-red-600 rounded-md px-1 py-0.5">
                      {item?.episode}
                    </span>
                  )}
                  <div
                    className="w-full h-72 bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${item?.image})`,
                    }}
                  />
                  <div className="absolute h-10 z-20 bottom-0 w-full bg-gradient-to-t from-background p-2"></div>
                </div>
                <p className="text-sm text-foreground font-bold">
                  {item?.title}
                </p>
                {Array.isArray(item?.tags) && !!item?.tags?.length && (
                  <ul className="flex flex-wrap items-center gap-2 mt-2">
                    {item?.tags?.map((tag, index) => (
                      <li
                        key={index}
                        className="text-xs text-foreground bg-muted rounded-full py-1 px-2"
                      >
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}

      {data?.length > 0 && limit < data?.length && (
        <div className="flex justify-center mt-12">
          <Button onClick={seeMore}>Ver mais</Button>
        </div>
      )}
    </section>
  );
};

List.displayName = "List";
