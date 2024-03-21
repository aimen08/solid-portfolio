import type { Component } from "solid-js";

import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Posts from "./_components/Posts";
import Footer from "./_components/Footer";
import Videos from "./_components/Videos";

const documentProps = {
  title: "Aymen",
  description: "Aymen (aimen08), Developer.",
};

const Page: Component = () => {
  return (
    <main class="px-6 py-[8vh] max-w-[76ch] mx-auto xl:text-lg dark:prose-invert">
      <script
        defer
        src="https://unpkg.com/@tinybirdco/flock.js"
        data-host="https://api.tinybird.co"
        data-token="p.eyJ1IjogImI3ZDI0MmIwLWRmOTctNDA2ZC04Y2ZmLTAzYTAzZjlhYzFmYiIsICJpZCI6ICI4Y2VkZTYyZi04ZDMxLTQzMWQtYTJjNy0xNDhhZDNmYTE1ZTMifQ.CGsn6MmRmNfRcI3a6aC3kW80AUm7-SUrQed5_GHOzGI"
      />
      <Hero />
      <Projects />
      <Videos />
      <Posts />
      <Footer />
    </main>
  );
};

export { Page, documentProps };
