import { Suspense } from "react";
import { ListSkeleton } from "@/components/list";
import { Button } from "@/components/ui/button";
import { ListSearch } from "@/components/animes/listSearch";
import { SearchAnime } from "@/components/animes/searchAnime";

export default function Page({ searchParams }) {
  return (
    <div className="flex flex-col gap-24">
      <Suspense fallback={<ListSkeleton length={12} />}>
        <ListSearch query={searchParams?.query} />
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
