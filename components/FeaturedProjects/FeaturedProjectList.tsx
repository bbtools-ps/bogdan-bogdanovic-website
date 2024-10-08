import { DATABASE_PATH, REVALIDATE_INTERVAL } from "@/constants";
import { sortDataCreateTime } from "@/lib/utils";
import type { IProjectData } from "@/models";
import FeaturedProject from "./FeaturedProject";

export default async function FeaturedProjectList({
  locale,
}: {
  locale: string;
}) {
  const data = await fetch(
    `${DATABASE_PATH}/projects${locale === "en" ? "" : "-" + locale}`,
    {
      next: { revalidate: REVALIDATE_INTERVAL },
    }
  );
  const projects = (await data.json()) as IProjectData;
  const sortedProjects = sortDataCreateTime(projects.documents);

  return (
    <>
      {sortedProjects.map((project, index) => (
        <FeaturedProject key={index} project={project} />
      ))}
    </>
  );
}
