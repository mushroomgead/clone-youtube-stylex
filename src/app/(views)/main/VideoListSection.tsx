import VideoItem from "@/app/components/Video/VideoItem";
import * as stylex from "@stylexjs/stylex";

export type VideoInfo = {
  description?: string;
  sources?: string;
  thumbnail?: string;
  subtitle?: string;
  thumb?: string;
  title?: string;
};

export default function VideoListSection({
  videoList,
}: {
  videoList: VideoInfo[];
}) {
  return (
    <div {...stylex.props(s.container)}>
      {videoList.map((item: VideoInfo) => {
        return <VideoItem thumbnail={item.thumbnail} title={item.title} />;
      })}
    </div>
  );
}

const s = stylex.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
});
