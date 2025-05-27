import { getReleases, renderReleaseItem } from "@/sdk/api";
import { List } from "@/components/list";

export async function ListReleases() {
  const releases = await getReleases();
  const data = releases?.map(renderReleaseItem);

  return (
    <List
      title="Lançamentos"
      data={data}
      error={!releases[0] || releases[0].response !== "success"}
    />
  );
}

ListReleases.displayName = "ListReleases";
