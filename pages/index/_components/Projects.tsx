import { Index } from "solid-js";
import ProjectItem from "./ProjectItem";

export default () => {
  const projectLists = [
    {
      name: "AlgeriaLogos",
      desc: "pixel perfect Algerian company logos",
      link: "https://www.algerialogos.com/",
      icon: "i-fluent-emoji-flat-confetti-ball",
    },
    {
      name: "Pazar",
      desc: "mobile app using React Native for ecommerce",
      link: "https://play.google.com/store/apps/details?id=com.mt.pazar",
      icon: "i-fluent-emoji-flat-shopping-cart",
    },
    {
      name: "Polyglot house",
      desc: "private school website, made with NextJs",
      link: "https://www.polyglothouse.com/",
      icon: "i-fluent-emoji-flat-microscope",
    },
    {
      name: "Telegram Snapchat Bot",
      desc: "the bot fetches stories of any Snapchat user",
      link: "https://t.me/SnapChatSave_bot",
      icon: "i-fluent-emoji-flat-robot",
    },
  ];
  const openLink = () => {
    window.open("https://github.com/aimen08", "_blank");
  };
  return (
    <>
      <h2 class="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span flex-1 class="title">
          Projects
        </span>
        <div
          onClick={openLink}
          class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
        >
          <div class="m-2 i-ri-arrow-right-up-line"></div>
        </div>
      </h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Index each={projectLists}>
          {(item) => <ProjectItem data={item()} />}
        </Index>
      </div>
    </>
  );
};
