import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";
import "./index.css";

export const generateStaticParams = async () => {
  const originalGenerateParams = generateStaticParamsFor("mdxPath");
  const params = await originalGenerateParams();
  // 过滤掉图片文件路径
  return params.filter((param) => {
    const path = Array.isArray(param.mdxPath)
      ? param.mdxPath.join("/")
      : param.mdxPath || "";
    return !path.match(/\.(png|jpg|jpeg|gif|svg|ico|webp)$/i);
  });
};

export async function generateMetadata(props) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath, params.lang);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

const Page = async (props) => {
  const params = await props.params;
  const result = await importPage(params.mdxPath, params.lang);
  const { default: MDXContent, toc, metadata, sourceCode } = result;

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
};

export default Page;
