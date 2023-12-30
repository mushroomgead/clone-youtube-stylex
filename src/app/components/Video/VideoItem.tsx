import { VideoInfo } from "@/app/(views)/main/VideoListSection";
import * as stylex from "@stylexjs/stylex";

export default function VideoItem({ title, thumbnail }: VideoInfo) {
  return (
    <div {...stylex.props(s.container)}>
      <img src={thumbnail} {...stylex.props(s.thumbnail)} />
      <div>{title}</div>
    </div>
  );
}

const s = stylex.create({
  container: {
    flex: "1 1 20%",
    marginRight: 14,
  },
  thumbnail: {
    width: "100%",
  },
});
