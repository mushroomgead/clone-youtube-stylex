import * as stylex from "@stylexjs/stylex";

export default function Icon() {
  return <div {...stylex.props(s.container)}></div>;
}

const s = stylex.create({
  container: {
    width: 30,
    height: 30,
    background: "#c3c3c3",
  },
});
