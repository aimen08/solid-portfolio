import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { generateHydrationScript, renderToString } from "solid-js/web";

import { PageContext } from "./types";

const passToClient = ["pageProps", "documentProps"];

const render = (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(() => <Page {...pageProps} />);

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Aymen Hamza | Full Stack Developer";
  const description =
    (documentProps && documentProps.description) ||
    "Aymen Hamza is a Full Stack Developer & Software Engineer passionate about problem-solving and building user-friendly applications.";

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://aymenhamza.com/" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        <title>${title}</title>
        <meta name="title" content="${title}" />
        <meta name="description" content="${description}" />
        <meta name="author" content="Aymen Hamza" />
        <meta name="keywords" content="Aymen Hamza, Full Stack Developer, Software Engineer, React, SolidJS, Web Development" />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aymenhamza.com/" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:image" content="https://aymenhamza.com/og-image.jpg" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aymenhamza.com/" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        <meta name="twitter:image" content="https://aymenhamza.com/og-image.jpg" />
        <meta name="twitter:creator" content="@AimenMT2" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

export { render, passToClient };
