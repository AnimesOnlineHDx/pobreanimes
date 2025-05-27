import {
  getAnimeDetails,
  getEpisodes,
  renderAnimeDetails,
  renderAnimeEpisodes,
} from "@/sdk/api";
import { Details, DetailSkeleton } from "@/components/details";
import { ListEpisodes, ListEpisodesSkeleton } from "./listEpisodes";

export const AnimeDetailsSkeleton = () => {
  return (
    <div>
      <DetailSkeleton />
      <ListEpisodesSkeleton />
    </div>
  );
};

AnimeDetailsSkeleton.displayName = "AnimeDetailsSkeleton";

export async function AnimeDetails({ id }) {
  const [detailsResponse, episodesResponse] = await Promise.all([
    getAnimeDetails({ anime_id: id }),
    getEpisodes({ anime_id: id }),
  ]);

  const anime = renderAnimeDetails(detailsResponse);
  const episodes = renderAnimeEpisodes(episodesResponse);

  return (
    <div>
      <Details {...anime} />
      <ListEpisodes
        data={episodes}
        error={
          !episodesResponse[0] || episodesResponse?.[0]?.response !== "success"
        }
      />
    </div>
  );
}

AnimeDetails.displayName = "AnimeDetails";
