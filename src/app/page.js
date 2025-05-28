import { Suspense } from "react";
import { ListSkeleton } from "@/components/list";
import { Button } from "@/components/ui/button";
import { ListReleases } from "@/components/animes/listReleases";
import { ListPopular } from "@/components/animes/listPopular";
import { SearchAnime } from "@/components/animes/searchAnime";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">

      {/* Box com estilo igual ao da imagem */}
      <div className="bg-[#ff0066] text-black px-8 py-5 rounded-lg max-w-3xl mx-auto text-center shadow">
        <h2 className="text-xl font-bold">Pobre Animes</h2>
        <p className="mt-2 text-base">
          Os anúncios é para manter nosso site online – obrigado pela compreensão.
        </p>
      </div>

      <div className="max-w-96 mx-auto flex flex-col justify-center items-center gap-4">
        <p className="text-center text-muted-foreground">
          Use a ferramenta de busca para encontrar mais rápido o anime que você procura!
        </p>
        <SearchAnime>
          <Button variant="outline">Buscar animes</Button>
        </SearchAnime>
      </div>

      <Suspense fallback={<ListSkeleton length={12} />}>
        <ListReleases />
      </Suspense>

      <Suspense fallback={<ListSkeleton length={12} />}>
        <ListPopular />
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
