import type { Metadata } from "next";
import type { FC, ReactNode } from "react";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  description: "Wucai Code - AI命令行工具文档",
  title: {
    absolute: "",
    template: "%s | Wucai Code",
  },
  appleWebApp: {
    title: "Wucai Code",
  },
};

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html suppressHydrationWarning lang="zh">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
