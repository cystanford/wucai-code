import React from "react";
import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import { Pre, withIcons } from "nextra/components";
import { GitHubIcon } from "nextra/icons";
import type { UseMDXComponents } from "nextra/mdx-components";
import type { ImgHTMLAttributes } from "react";

// 自定义 img 组件，动态替换路径
const CustomImg = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const { src, ...rest } = props;
  const isProduction = process.env.NODE_ENV === "production";
  const assetPrefix = isProduction ? "/wucai-code" : "";

  // 检查 src 是否为字符串
  if (typeof src !== 'string') {
    return <img src={src} {...rest} />;
  }

  const adjustedSrc = src.replace(/\.\.\/assets\//, `${assetPrefix}/assets/`);
  return <img src={adjustedSrc} {...rest} />;
};

const docsComponents = getDocsMDXComponents({
  pre: withIcons(Pre, { js: GitHubIcon }),
});

export const useMDXComponents: UseMDXComponents<any> = (components = {}) => ({
  ...docsComponents,
  img: CustomImg,
  ...components,
});
