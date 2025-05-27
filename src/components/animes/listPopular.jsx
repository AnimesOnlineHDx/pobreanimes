import { getPopular, renderPopularItem } from "@/sdk/api";
import { List } from "@/components/list";

export async function ListPopular() {
  const popular = await getPopular();
  const data = popular?.map(renderPopularItem);

  return (
    <List
      title="Populares"
      data={data}
      error={!popular?.[0] || popular?.[0]?.response !== "success"}
    />
  );
}

ListPopular.displayName = "ListPopular";
