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
            className='select-none font-extrabold flex flex-row items-center gap-0'
            title='Wucai Code: AI命令行工具'
          >
            <img
              src='/wucai-code/assets/images/wucai-logo.png'
              alt='Wucai Code'
              width={32}
              height={32}
              className='shrink-0'
              style={{ marginRight: '8px' }}
            />
            <span className='text-[1.3rem] font-normal whitespace-nowrap max-md:hidden' style={{ marginRight: '4px' }}>
              Wucai
            </span>
            <span className='text-[1.3rem] font-normal whitespace-nowrap max-md:hidden'>
              Code
            </span>
          </span>
        </>
      }
      projectLink='https://github.com/cystanford/wucai-code'
    />
  );

  return (
    <Layout
      navbar={navbar}
      footer={null}
      docsRepositoryBase="https://github.com/cystanford/wucai-code/blob/main/content"
      i18n={[
        { locale: "zh", name: "中文" },
      ]}
      sidebar={{
        defaultMenuCollapseLevel: 1,
        autoCollapse: false,
      }}
      pageMap={sourcePageMap}
      nextThemes={{ defaultTheme: "light" }}
    >
      {children}
    </Layout>
  );
};

export default LanguageLayout;
