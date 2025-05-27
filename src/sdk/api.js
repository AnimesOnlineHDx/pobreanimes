export const BASE_URL = "https://devsbr.work";

export async function getPopular() {
  return fetch(`${BASE_URL}/home/populares`).then((res) => res.json());
}

export async function getReleases() {
  return fetch(`${BASE_URL}/home/lancamentos`).then((res) => res.json());
}

export async function getDubbedMoovies() {
  return fetch(`${BASE_URL}/filmes/dublados`).then((res) => res.json());
}

export async function getSubtitledMoovies() {
  return fetch(`${BASE_URL}/filmes/legendados`).then((res) => res.json());
}

export async function getAnimeDetails({ anime_id }) {
  return fetch(`${BASE_URL}/anime/detalhes/${anime_id}`).then((res) =>
    res.json()
  );
}

export async function getEpisodes({ anime_id }) {
  return fetch(`${BASE_URL}/anime/episodios/${anime_id}`).then((res) =>
    res.json()
  );
}

export async function search({ name }) {
  return fetch(`${BASE_URL}/anime/pesquisar/${name}`).then((res) => res.json());
}

export async function getNextEpisode({ anime_id, current_ep_id }) {
  return fetch(
    `${BASE_URL}/anime/episodios/proximo/${anime_id}/${current_ep_id}`
  ).then((res) => res.json());
}

export async function getPreviousEpisode({ anime_id, current_ep_id }) {
  return fetch(
    `${BASE_URL}/anime/episodios/anterior/${anime_id}/${current_ep_id}`
  ).then((res) => res.json());
}

export async function getCategories() {
  return fetch(`${BASE_URL}/home/categorias`).then((res) => res.json());
}

export async function getCategoryTitle({ slug }) {
  return fetch(`${BASE_URL}/home/categories/slug/${slug}`).then((res) =>
    res.json()
  );
}

export async function getAnimesByCategory({ slug }) {
  return fetch(`${BASE_URL}/home/categoria/${slug}`).then((res) => res.json());
}

export const createImage = (file) => {
  return "https://cdn.appanimeplus.tk/img/" + file;
};

export const renderReleaseItem = (item) => {
  const tags = [];

  if (!!item?.sdlocation) {
    tags.push("HD");
  }

  if (!!item?.location) {
    tags.push("SD");
  }

  const title = item?.title?.split(/episodio/gi);
  const episode = title[1] && title[1].trim();

  return {
    id: item?.video_id,
    episode: episode ? `Episódio ${episode}` : "",
    title: title[0].trim(),
    image: item?.image,
    url: item?.sdlocation ?? item?.location,
    tags,
  };
};

export const renderPopularItem = (item) => {
  return {
    id: item?.id,
    title: item?.category_name,
    image: item?.category_icon,
    href: `/anime/${item?.id}`,
    tags: [],
  };
};

export const renderSearchItem = (item) => {
  return {
    id: item?.category_id,
    title: item?.category_name,
    image: item?.category_icon,
    href: `/anime/${item?.category_id}`,
    tags: [],
  };
};

export const renderAnimeDetails = (result) => {
  if (!result[0] || result[0].response !== "success") return { error: true };

  const anime = result[0];

  const tags = [];

  if (anime?.genres && typeof anime?.genres === "string") {
    anime?.genres?.split(", ").forEach((genre) => tags.push(genre?.trim()));
  }

  if (anime?.ano) {
    tags.push(anime?.ano);
  }

  return {
    id: anime?.category_id,
    title: anime?.category_name,
    image: createImage(anime?.category_icon),
    description: anime?.category_desc,
    tags,
  };
};

export const renderAnimeEpisodes = (results) => {
  if (!results[0] || results[0].response !== "success") return { error: true };

  return results?.map((item) => ({
    id: item?.video_id,
    title: item?.title,
    urls: [
      ...(item?.location && [{ quality: "SD", link: item?.location }]),
      ...(item?.sdlocation && [{ quality: "HD", link: item?.sdlocation }]),
    ],
  }));
};

export const renderAnimeByCategory = (item) => {
  return {
    id: item?.category_id,
    title: item?.category_name,
    description: item?.category_desc,
    image: item?.category_icon,
    href: `/anime/${item?.category_id}`,
  };
};
