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
        <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', minWidth: '200px' }}>
          <img
            src='/wucai-code/assets/images/wucai-logo.png'
            alt='Wucai Code'
            width={32}
            height={32}
            style={{ marginRight: '8px', flexShrink: 0 }}
          />
          <span style={{ fontSize: '1.3rem', marginRight: '4px' }} className='max-md:hidden'>
            Wucai
          </span>
          <span style={{ fontSize: '1.3rem' }} className='max-md:hidden'>
            Code
          </span>
        </div>
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
        defaultMenuCollapseLevel: Infinity,
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
