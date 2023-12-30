import Icon from "@/app/components/Icon";
import * as stylex from "@stylexjs/stylex";

export default function NavSection() {
  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.hamburgerIcon)}>
        <Icon />
      </div>
    </div>
  );
}

const s = stylex.create({
  container: {
    background: "#eee",
    width: 72,
    height: "100dvh",
    position: "fixed",
  },
  hamburgerIcon: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
});
