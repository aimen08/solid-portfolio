import { Index } from "solid-js";
import VideoItem from "./VideoItem";

export default () => {
  const videos = [
    {
      image: "/images/1.jpeg",
      link: "https://www.youtube.com/watch?v=tasC3h8PF_A"
    },
    {
      image: "/images/2.jpeg",
      link: "https://www.youtube.com/watch?v=W7aeOLCovto"
    },
    {
      image: "/images/3.jpeg",
      link: "https://www.youtube.com/watch?v=jJC_uUIW7xA"
    }
  ]
  const openLink = () => {
    window.open("https://www.youtube.com/channel/UCEAEDAO5IOveScplJrKl0QA", "_blank");
  };
  return (
    <>
      <h2 class="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span flex-1 class="title">
          Videos
        </span>
        <div
          onClick={openLink}
          class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
        >
          <div class="m-2 i-ri-arrow-right-up-line"></div>
        </div>
      </h2>
      <div class="flex flex-col sm:flex-row gap-2">
        <Index each={videos}>
          {(item) => <VideoItem data={item()} />}
        </Index>
      </div>
    </>
  );
};
