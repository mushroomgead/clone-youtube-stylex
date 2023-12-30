import * as stylex from "@stylexjs/stylex";

export default function SearchBox() {
  return (
    <div {...stylex.props(s.container)}>
      <input type="text" {...stylex.props(s.searchInput)} />
    </div>
  );
}

const s = stylex.create({
  container: {},
  searchInput: {
    width: 515,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#eee",
    borderStyle: "solid",
    paddingLeft: 16,
  },
});
