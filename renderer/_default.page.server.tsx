import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { generateHydrationScript, renderToString } from "solid-js/web";

import { PageContext } from "./types";

const passToClient = ["pageProps", "documentProps"];

const render = (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(() => <Page {...pageProps} />);

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Aymen";
  const description =
    (documentProps && documentProps.description) ||
    "Aymen (aimen08), Developer.";

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="author" content="Aymen" />
        <meta property="og:title" content="Aymen" />
        <meta property="og:image" content="https://aymenhamza.com/avatar.jpeg" />
        <meta property="description" content="${description}" />
        <meta property="og:description" content="${description}" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@AimenMT2" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://aymenhamza.com/" />
        <link rel="icon" href="/favicon.ico" />
        <title>${title}</title>
        <script defer
        src="https://unpkg.com/@tinybirdco/flock.js"
        data-host="https://api.tinybird.co"
        data-token="p.eyJ1IjogImI3ZDI0MmIwLWRmOTctNDA2ZC04Y2ZmLTAzYTAzZjlhYzFmYiIsICJpZCI6ICI4Y2VkZTYyZi04ZDMxLTQzMWQtYTJjNy0xNDhhZDNmYTE1ZTMifQ.CGsn6MmRmNfRcI3a6aC3kW80AUm7-SUrQed5_GHOzGI"
        />
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export { render, passToClient };
