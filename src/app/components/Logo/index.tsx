import * as stylex from "@stylexjs/stylex";

export default function Logo() {
  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.logo)}></div>
      Premium
    </div>
  );
}

const s = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 28,
    height: 20,
    background: "#ff0201",
    borderRadius: 5,
    marginLeft: 14,
    marginRight: 6,
  },
});
