import { Index } from "solid-js";
import VideoItem from "./VideoItem";
import SectionHeader from "./SectionHeader";

export default () => {
  const videos = [
    {
      image: "/images/1.jpeg",
      link: "https://www.youtube.com/watch?v=tasC3h8PF_A",
    },
    {
      image: "/images/2.jpeg",
      link: "https://www.youtube.com/watch?v=W7aeOLCovto",
    },
    {
      image: "/images/3.jpeg",
      link: "https://www.youtube.com/watch?v=jJC_uUIW7xA",
    },
  ];
  return (
    <section>
      <SectionHeader
        number="02"
        title="On"
        italic="Camera"
        href="https://www.youtube.com/channel/UCEAEDAO5IOveScplJrKl0QA"
      />
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Index each={videos}>{(item) => <VideoItem data={item()} />}</Index>
      </div>
    </section>
  );
};
