import Tag from "@/app/components/Tag";
import * as stylex from "@stylexjs/stylex";

export type TagInfo = {
  title?: string;
};

const tagList = [
  { title: "All" },
  { title: "Mixes" },
  { title: "Music" },
  { title: "Gaming" },
  { title: "Live" },
  { title: "Recently uploaded" },
];

export default function TagsSection() {
  return (
    <div {...stylex.props(s.container)}>
      {tagList.map((tag: TagInfo) => {
        return <Tag title={tag.title} />;
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
