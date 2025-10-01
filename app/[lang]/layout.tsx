import type { Metadata } from "next";
import { Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import type { FC, ReactNode } from "react";

export async function generateStaticParams() {
  return [{ lang: "zh" }];
}

type LayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>;

const LanguageLayout: FC<LayoutProps> = async ({ children, params }) => {
  const { lang } = await params;
  let sourcePageMap = await getPageMap(`/${lang}`);

  const navbar = (
    <Navbar
      logo={
        <>
          <span
            className="ms-2 select-none font-extrabold flex items-center"
            title="Wucai Code: AI命令行工具"
          >
            <span className="text-[1.3rem] font-normal align-middle mr-1">
              Wucai
            </span>
            <span className="text-[1.3rem] font-normal align-middle">
              Code
            </span>
          </span>
        </>
      }
      projectLink="https://github.com/cystanford/wucai-code"
    />
  );

  return (
    <Layout
      navbar={navbar}
      footer={null}
      docsRepositoryBase="https://github.com/cystanford/wucai-code/blob/main/docs"
      sidebar={{
        defaultMenuCollapseLevel: 1,
        autoCollapse: true,
      }}
      pageMap={sourcePageMap}
      nextThemes={{ defaultTheme: "light" }}
    >
      {children}
    </Layout>
  );
};

export default LanguageLayout;
