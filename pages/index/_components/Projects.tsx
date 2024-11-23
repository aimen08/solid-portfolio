import { Index } from "solid-js";
import ProjectItem from "./ProjectItem";

export default () => {
  const projectLists = [
    {
      name: "Tote&Carry",
      desc: "Develop and maintain Shopify store that offers a wide range of products.",
      link: "https://www.totencarry.com/",
      icon: "i-fluent-emoji-flat-handbag",
      stack: ["shopify"],
    },
    {
      name: "Rusty's Off-Road",
      desc: "Maintain and develop new features for Rusty's Off-Road Shopify store.",
      link: "https://www.rustysoffroad.com/",
      icon: "i-fluent-emoji-flat-automobile",
      stack: ["shopify"],
    },
    {
      name: "Chitchat",
      desc: "A discord bot to chat with strangers from all over the world!",
      link: "https://www.chitchat.gg/",
      icon: "i-fluent-emoji-flat-person-beard-medium-light",
      stack: ["discord", "typescript", "docker"],
    },
    {
      name: "Wechalet ",
      desc: "WeChalet connects you with unique homes, condos and cottages for rent in nature.",
      link: "https://wechalet.com/",
      icon: "i-fluent-emoji-flat-houses",
      stack: [
        "react",
        "typescript",
        "sass",
        "redux",
        "reactquery",
        "playwright",
      ],
    },
    {
      name: "Crypto Signal and Trading Bot",
      desc: "Crypto trading bot with signals and AI and abilty to trade on Binance.",
      link: "https://t.me/Trade_Wise_bot",
      icon: "i-fluent-emoji-flat-heavy-dollar-sign",
      users: "+4K Users",
      stack: ["telegram", "python", "docker", "postgresql"],
    },
    {
      name: "Voice AI Generator ",
      desc: "Telegram bot for generating Voice of famous singers using AI.",
      link: "https://t.me/AiarabBot",
      icon: "i-fluent-emoji-flat-microphone",
      users: "+100K Users",
      stack: ["telegram", "python", "docker", "postgresql"],
    },
    {
      name: "QrCode AI Generator ",
      desc: "Telegram bot for generating Qr code with AI.",
      link: "https://t.me/QRcodeAIbot",
      icon: "i-fluent-emoji-flat-gem-stone",
      users: "+8K Users",
      stack: ["telegram", "python", "docker", "postgresql"],
    },
    {
      name: "MediaBot",
      desc: "Telegram bot for downloading media.",
      link: "https://t.me/Media_r49_bot",
      icon: "i-fluent-emoji-flat-clapper-board",
      users: "+120K Users",
      stack: ["telegram", "python", "docker", "postgresql"],
    },
    {
      name: "Phone Lookup Bot",
      desc: "Telegram bot for looking up phone numbers.",
      link: "https://t.me/number_r49_Bot",
      icon: "i-fluent-emoji-flat-mobile-phone",
      users: "+770K Users",
      stack: ["telegram", "python", "docker", "postgresql"],
    },
    {
      name: "AlgeriaLogos",
      desc: "pixel perfect Algerian company logos",
      link: "https://keen-bartik-f9d7d0.netlify.app/",
      icon: "i-fluent-emoji-flat-confetti-ball",
      stack: ["javascript", "sass"],
    },
    {
      name: "False10",
      desc: "a community website where my client shares tools and bots.",
      link: "https://www.false.ae/",
      icon: "i-fluent-emoji-flat-toolbox",
      stack: ["nextjs", "tailwind", "typescript", "react"],
    },
    {
      name: "Pazar",
      desc: "mobile app using React Native for ecommerce",
      link: "https://play.google.com/store/apps/details?id=com.mt.pazar",
      icon: "i-fluent-emoji-flat-shopping-cart",
      stack: ["android", "typescript", "expo"],
    },
    {
      name: "Polyglot house",
      desc: "private school website, made with NextJs",
      link: "https://polyglot-website-mcb1wnftd-aimen08.vercel.app/",
      icon: "i-fluent-emoji-flat-microscope",
      stack: ["nextjs", "tailwind", "typescript", "react"],
    },
    {
      name: "Telegram Snapchat Bot",
      desc: "the bot fetches stories of any Snapchat user",
      link: "https://t.me/SnapChatSave_bot",
      icon: "i-fluent-emoji-flat-robot",
      users: "+250K Users",
      stack: ["telegram", "python", "docker", "postgresql"],
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
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <Index each={projectLists}>
          {(item) => <ProjectItem data={item()} />}
        </Index>
      </div>
    </>
  );
};
