import { Index } from "solid-js";
import ProjectItem from "./ProjectItem";

export default () => {
  const projectLists = [
    {
      name: "Wechalet ",
      desc: "WeChalet connects you with unique homes, condos and cottages for rent in nature.",
      link: "https://wechalet.com/",
      icon: "i-fluent-emoji-flat-houses",
    },
    {
      name: "Voice AI Generator ",
      desc: "Telegram bot for generating Voice of famous singers using AI.",
      link: "https://t.me/AiarabBot",
      icon: "i-fluent-emoji-flat-microphone",
      users: "+100K User"
    },
    {
      name: "QrCode AI Generator ",
      desc: "Telegram bot for generating Qr code with AI.",
      link: "https://t.me/QRcodeAIbot",
      icon: "i-fluent-emoji-flat-gem-stone",
      users: "+8K Users"
    },
    {
      name: "MediaBot",
      desc: "Telegram bot for downloading media.",
      link: "https://t.me/Media_r49_bot",
      icon: "i-fluent-emoji-flat-clapper-board",
      users: "+120K Users"
    },
    {
      name: "Phone Lookup Bot",
      desc: "Telegram bot for looking up phone numbers.",
      link: "https://t.me/number_r49_Bot",
      icon: "i-fluent-emoji-flat-mobile-phone",
      users: "+770K Users"
    },
    {
      name: "AlgeriaLogos",
      desc: "pixel perfect Algerian company logos",
      link: "https://keen-bartik-f9d7d0.netlify.app/",
      icon: "i-fluent-emoji-flat-confetti-ball",
    },
    {
      name: "False10",
      desc: "a community website where my client shares tools and bots.",
      link: "https://www.false.ae/",
      icon: "i-fluent-emoji-flat-toolbox",
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
      link: "https://polyglot-website-mcb1wnftd-aimen08.vercel.app/",
      icon: "i-fluent-emoji-flat-microscope",
    },
    {
      name: "Telegram Snapchat Bot",
      desc: "the bot fetches stories of any Snapchat user",
      link: "https://t.me/SnapChatSave_bot",
      icon: "i-fluent-emoji-flat-robot",
      users: "+250K Users"
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
