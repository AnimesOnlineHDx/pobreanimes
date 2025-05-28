import { Suspense } from "react";
import {
  AnimeDetails,
  AnimeDetailsSkeleton,
} from "@/components/animes/animeDetails";

import { title } from "@/metadata/default";
import { createImage, getAnimeDetails } from "@/sdk/api";

export async function generateMetadata({ params }, parent) {
  // read route params
  const id = params.id;

  const result = await getAnimeDetails({ anime_id: id });

  let _title = "";
  let _description = "";
  let _images = null;

  if (!!result?.[0] && result?.[0]?.response === "success") {
    _title = result[0].category_name;
    _description = result[0].category_desc;
    _images = { url: createImage(result[0].category_icon) };
  }

  const prevOGImages = (await parent).openGraph?.images || [];
  const prevTWImages = (await parent).twitter?.images || [];

  return {
    title: [title, _title].join(" - "),
    openGraph: {
      title: _title,
      description: _description,
      siteName: "Pobre Animes",
      images: [_images, ...prevOGImages],
    },
    twitter: {
      title: _title,
      description: _description,
      card: "summary_large_image",
      images: _images?.url ?? prevTWImages,
    },
  };
}

export default function Page({ params }) {
  return (
    <div className="flex flex-col gap-24">
      <Suspense fallback={<AnimeDetailsSkeleton />}>
        <AnimeDetails id={params?.id} />
      </Suspense>
    </div>
  );
}
