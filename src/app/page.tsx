import * as stylex from "@stylexjs/stylex";

const MEDIA_MOBILE = "@media (max-width: 700px)";

export default function Home() {
  return (
    <main>
      <h1 {...stylex.props(s.h1)}>Hello StyleX</h1>
    </main>
  );
}

const s = stylex.create({
  h1: {
    fontSize: "4rem",
    lineHeight: 1,
    fontFamily: "system-ui, sans-serif",
    color: "pink",
    fontWeight: 400,
    textAlign: "center",
    display: "flex",
    gap: 8,
    whiteSpace: "nowrap",
    flexDirection: {
      default: "row",
      [MEDIA_MOBILE]: "column",
    },
  },
});
