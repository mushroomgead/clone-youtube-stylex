import { promises as fs } from "fs";
import VideoItem from "@/components/Video/VideoItem";
import Tag from "@/components/Tag";
import TagsSection from "@/app/(views)/main/TagsSection";
import VideoListSection from "@/app/(views)/main/VideoListSection";

const fetchVideoList = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/data/recommended-video-list.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return data;
};

export default async function Home() {
  const videoList = await fetchVideoList();

  return (
    <main>
      <TagsSection />
      <VideoListSection videoList={videoList} />
    </main>
  );
}
