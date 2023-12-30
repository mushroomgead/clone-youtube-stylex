import { TagInfo } from "@/app/(views)/main/TagsSection";
import * as stylex from "@stylexjs/stylex";

export default function Tag({ title }: TagInfo) {
  return (
    <div {...stylex.props(s.container)}>
      <div>{title}</div>
    </div>
  );
}

const s = stylex.create({
  container: {
    padding: "5px 10px",
    border: "1px solid",
    marginRight: 5,
    marginBottom: 5,
  },
});
