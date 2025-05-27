import { search, renderSearchItem } from "@/sdk/api";
import { List } from "@/components/list";

export async function ListSearch({ query }) {
  const results = await search({ name: query });
  const data = Array.isArray(results) ? results?.map(renderSearchItem) : [];

  return (
    <List
      title="Resultados Encontrados"
      data={data}
      error={!results[0] || results?.[0]?.response !== "success"}
    />
  );
}

ListSearch.displayName = "ListSearch";
