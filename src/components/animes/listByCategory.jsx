import { getAnimesByCategory, renderAnimeByCategory } from "@/sdk/api";
import { List } from "@/components/list";

import { getCategoryTitle } from "@/sdk/api";

export async function ListByCategory({ slug }) {
  const [results, category] = await Promise.all([
    getAnimesByCategory({ slug }),
    getCategoryTitle({ slug }),
  ]);

  const data = Array.isArray(results)
    ? results?.map(renderAnimeByCategory)
    : [];

  return (
    <List
      title={["Animes da categoria:", category?.title].join(" ")}
      data={data}
      error={!results[0] || results?.[0]?.response !== "success"}
    />
  );
}

ListByCategory.displayName = "ListByCategory";
