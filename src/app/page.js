import { Suspense } from "react";
import { ListSkeleton } from "@/components/list";
import { Button } from "@/components/ui/button";
import { ListReleases } from "@/components/animes/listReleases";
import { ListPopular } from "@/components/animes/listPopular";
import { SearchAnime } from "@/components/animes/searchAnime";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa"; // ícones

export default function Home() {
  return (
    <div className="flex flex-col gap-8">

      {/* Box com estilo igual ao da imagem */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h3 className="text-lg font-semibold">⚠️ POBRE ANIMES - ATENÇÃO ⚠️</h3>
        <p className="text-muted-foreground mt-1">
          ♥️ Os anúncios são para manter nosso site online - pedimos total compreensão! ♥️
        </p>
      </div>

      {/* Texto explicativo acima dos botões */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h3 className="text-lg font-semibold">🔥 Participe do nosso Telegram e Discord! 🔥</h3>
        <p className="text-muted-foreground mt-1">
         👉🏻 Esses são os nossos principais meios de contato com você. Participe dos nossos servidores para não perder nenhum aviso!
        </p>
      </div>

      {/* Botões de redes sociais */}
      <div className="flex justify-center gap-4">
        <a
          href="https://t.me/seuTelegram"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#0088cc] hover:bg-[#0088cc] hover:text-white px-4 py-2 rounded-md flex items-center gap-2 transition"
        >
          <FaTelegramPlane size={18} />
          Telegram
        </a>

        <a
          href="https://discord.gg/seuDiscord"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#5865F2] hover:bg-[#5865F2] hover:text-white px-4 py-2 rounded-md flex items-center gap-2 transition"
        >
          <FaDiscord size={18} />
          Discord
        </a>
      </div>

      {/* Bloco de busca */}
      <div className="max-w-96 mx-auto flex flex-col justify-center items-center gap-4 mt-10">
        <p className="text-center text-muted-foreground">
          Use a ferramenta de busca para encontrar mais rápido o anime que você procura!
        </p>
        <SearchAnime>
          <Button variant="outline">Buscar animes</Button>
        </SearchAnime>
      </div>

      {/* Listas */}
      <Suspense fallback={<ListSkeleton length={12} />}>
        <ListReleases />
      </Suspense>

      <Suspense fallback={<ListSkeleton length={12} />}>
        <ListPopular />
      </Suspense>

      {/* Bloco de busca final */}
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
