import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Gallery from "./gallery";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Gallery settings={settings} authors={authors} />;
}

// export const revalidate = 60;
