import type { Component } from "solid-js";

import Hero from "./_components/Hero";
import EvominxCard from "./_components/EvominxCard";
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
    <div class="relative min-h-screen">
      <script
        defer
        src="https://unpkg.com/@tinybirdco/flock.js"
        data-host="https://api.tinybird.co"
        data-token="p.eyJ1IjogImI3ZDI0MmIwLWRmOTctNDA2ZC04Y2ZmLTAzYTAzZjlhYzFmYiIsICJpZCI6ICI4Y2VkZTYyZi04ZDMxLTQzMWQtYTJjNy0xNDhhZDNmYTE1ZTMifQ.CGsn6MmRmNfRcI3a6aC3kW80AUm7-SUrQed5_GHOzGI"
      />

      {/* Ambient background */}
      <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div class="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-[#4E85BF]/10 blur-[120px]" />
        <div class="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#89AACC]/8 blur-[120px]" />
        <div
          class="absolute inset-0 opacity-[0.025]"
          style={{
            "background-image":
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            "background-size": "40px 40px",
          }}
        />
      </div>

      <main class="px-6 md:px-10 py-[6vh] max-w-6xl mx-auto xl:text-lg dark:prose-invert">
        <Hero />
        <EvominxCard />
        <Projects />
        <Videos />
        <Posts />
        <Footer />
      </main>
    </div>
  );
};

export { Page, documentProps };
