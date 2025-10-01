import type { Metadata } from "next";
import type { FC, ReactNode } from "react";
import { Head } from "nextra/components";
import "./globals.css";

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
      <Head
        color={{
          hue: { dark: 210, light: 210 },
          saturation: { dark: 100, light: 100 },
        }}
      />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
