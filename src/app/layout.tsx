import type { Metadata } from "next";
import "./styles/globals.css";
import HeaderSection from "@/app/(views)/common/HeaderSection";
import NavSection from "@/app/(views)/common/NavSection";
import * as stylex from "@stylexjs/stylex";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div {...stylex.props(s.container)}>
          <NavSection />
          <HeaderSection />
        </div>
        <div {...stylex.props(s.containerBody)}>{children}</div>
      </body>
    </html>
  );
}

const s = stylex.create({
  container: {
    position: "relative",
    height: 47,
  },
  containerBody: {
    position: "relative",
    left: 72,
    padding: 16,
  },
});
