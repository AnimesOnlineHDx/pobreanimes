import { CategoriesList } from "@/components/categoriesList";

import { getCategories } from "@/sdk/api";

export const LinksSkeleton = () => {
  return <div></div>;
};

LinksSkeleton.displayName = "LinksSkeleton";

export async function Links() {
  const data = await getCategories();

  return <CategoriesList options={data} />;
}

Links.displayName = "Links";
