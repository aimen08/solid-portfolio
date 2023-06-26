import { Component } from "solid-js";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
import "vite/client";
export type PageProps = {};
export type PageContext = PageContextBuiltIn & {
  Page: (pageProps: PageProps) => Component;
  pageProps: PageProps;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};
