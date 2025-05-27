import { Suspense } from "react";

import { ListByCategory } from "@/components/animes/listByCategory";
import { ListSkeleton } from "@/components/list";

import { title } from "@/metadata/default";
import { SearchAnime } from "@/components/animes/searchAnime";
import { Button } from "@/components/ui/button";

import { getCategoryTitle } from "@/sdk/api";

export async function generateMetadata({ params }, parent) {
  const data = await getCategoryTitle({ slug: params?.category_slug });

  return {
    title: [title, data?.title].filter(Boolean).join(" - "),
  };
}

export default function Page({ params }) {
  return (
    <div className="flex flex-col gap-24">
      <Suspense fallback={<ListSkeleton length={12} />}>
        <ListByCategory slug={params?.category_slug} />
      </Suspense>

      <div className="max-w-96 mx-auto flex flex-col justify-center items-center gap-4">
        <p className="text-center text-muted-foreground">
          Não encontrou o que procurava? Tente usar a ferramenta de busca
        </p>
        <SearchAnime>
          <Button variant="outline">Buscar animes</Button>
        </SearchAnime>
      </div>
    </div>
  );
}
