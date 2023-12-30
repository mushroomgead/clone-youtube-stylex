import * as stylex from "@stylexjs/stylex";
import SearchBox from "@/components/SearchBox";
import Logo from "@/app/components/Logo";

export default function HeaderSection() {
  return (
    <div {...stylex.props(s.container)}>
      <Logo />
      <div {...stylex.props(s.containerSearchBox)}>
        <SearchBox />
      </div>
    </div>
  );
}

const s = stylex.create({
  container: {
    position: "fixed",
    display: "flex",
    padding: "6px 0",
    left: 72,
    zIndex: 1,
    background: "#fff",
    width: "100%",
    justifyContent: "center",
  },
  containerSearchBox: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});
