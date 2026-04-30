import { For, Index } from "solid-js";
import ProjectItem from "./ProjectItem";
import SectionHeader from "./SectionHeader";

type Project = {
  name: string;
  desc: string;
  link: string;
  icon: string;
  iconImg?: string;
  showcase?: string;
  users?: string;
  stack?: string[];
};

type ProjectGroup = {
  category: string;
  items: Project[];
};

export default () => {
  const featured: Project = {
    name: "ShotX",
    desc: "Modern macOS screen capture for the menu bar — fast, lightweight, and built for creators.",
    link: "https://github.com/aimen08/shotx",
    icon: "i-fluent-emoji-flat-camera-with-flash",
    iconImg: "/images/shotx-icon.png",
    showcase: "/images/og-image-shotx.png",
  };

  const projectGroups: ProjectGroup[] = [
    {
      category: "Shopify Stores",
      items: [
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
      ],
    },
    {
      category: "Landing Pages",
      items: [
        {
          name: "Bodega Offer Sale",
          desc: "Conversion-focused sale landing page for Tote&Carry's Bodega collection.",
          link: "https://www.totencarry.com/pages/bodega-offer-sale",
          icon: "i-fluent-emoji-flat-shopping-bags",
          showcase: "/images/totencarry-bodega.jpeg",
          stack: ["shopify"],
        },
        {
          name: "Ice Energy",
          desc: "Product launch landing page for the Ice Energy collection.",
          link: "https://www.totencarry.com/pages/ice-energy-landing-page",
          icon: "i-fluent-emoji-flat-ice",
          showcase: "/images/totencarry-ice.jpeg",
          stack: ["shopify"],
        },
        {
          name: "Color Energy",
          desc: "Vibrant landing page showcasing the Color Energy product line.",
          link: "https://www.totencarry.com/pages/color-energy-landing-page",
          icon: "i-fluent-emoji-flat-artist-palette",
          showcase: "/images/totencarry-color.jpeg",
          stack: ["shopify"],
        },
      ],
    },
    {
      category: "Bots",
      items: [
        {
          name: "Chitchat",
          desc: "A discord bot to chat with strangers from all over the world!",
          link: "https://www.chitchat.gg/",
          icon: "i-fluent-emoji-flat-person-beard-medium-light",
          stack: ["discord", "typescript", "docker"],
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
          name: "Voice AI Generator",
          desc: "Telegram bot for generating Voice of famous singers using AI.",
          link: "https://t.me/AiarabBot",
          icon: "i-fluent-emoji-flat-microphone",
          users: "+100K Users",
          stack: ["telegram", "python", "docker", "postgresql"],
        },
        {
          name: "QrCode AI Generator",
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
          name: "Telegram Snapchat Bot",
          desc: "The bot fetches stories of any Snapchat user.",
          link: "https://t.me/SnapChatSave_bot",
          icon: "i-fluent-emoji-flat-robot",
          users: "+250K Users",
          stack: ["telegram", "python", "docker", "postgresql"],
        },
      ],
    },
    {
      category: "Websites",
      items: [
        {
          name: "Wechalet",
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
          name: "False10",
          desc: "A community website where my client shares tools and bots.",
          link: "https://www.false.ae/",
          icon: "i-fluent-emoji-flat-toolbox",
          stack: ["nextjs", "tailwind", "typescript", "react"],
        },
        {
          name: "Polyglot House",
          desc: "Private school website, made with NextJs.",
          link: "https://polyglot-website-mcb1wnftd-aimen08.vercel.app/",
          icon: "i-fluent-emoji-flat-microscope",
          stack: ["nextjs", "tailwind", "typescript", "react"],
        },
        {
          name: "AlgeriaLogos",
          desc: "Pixel perfect Algerian company logos.",
          link: "https://keen-bartik-f9d7d0.netlify.app/",
          icon: "i-fluent-emoji-flat-confetti-ball",
          stack: ["javascript", "sass"],
        },
      ],
    },
    {
      category: "Mobile Apps",
      items: [
        {
          name: "Pazar",
          desc: "Mobile app using React Native for ecommerce.",
          link: "https://play.google.com/store/apps/details?id=com.mt.pazar",
          icon: "i-fluent-emoji-flat-shopping-cart",
          stack: ["android", "typescript", "expo"],
        },
      ],
    },
  ];

  const totalCount =
    1 + projectGroups.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <section>
      <SectionHeader
        number="01"
        title="Latest"
        italic="Projects"
        href="https://github.com/aimen08"
      />

      {/* Featured project — full-bleed showcase */}
      <a
        href={featured.link}
        target="_blank"
        class="group block rounded-3xl bg-surface border border-stroke overflow-hidden transition-colors decoration-none hover:border-stroke/60 mb-10"
      >
        <div class="grid grid-cols-1 lg:grid-cols-5">
          <div class="lg:col-span-3 relative aspect-[1200/630] lg:aspect-auto bg-stroke/30 overflow-hidden">
            <img
              src={featured.showcase}
              alt={featured.name}
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
            <div class="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-bg/70 backdrop-blur-md border border-stroke px-3 py-1">
              <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span class="text-[10px] uppercase tracking-[0.2em] text-textPrimary">
                Featured · New
              </span>
            </div>
          </div>
          <div class="lg:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <img
                  src={featured.iconImg}
                  alt={`${featured.name} icon`}
                  class="w-12 h-12 rounded-xl object-contain"
                />
                <div class="text-xs text-muted uppercase tracking-[0.3em]">
                  Desktop App · macOS
                </div>
              </div>
              <h3 class="font-display italic text-4xl md:text-5xl text-textPrimary mb-3 group-hover:translate-x-1 transition-transform">
                {featured.name}
              </h3>
              <p class="text-sm md:text-base text-muted">{featured.desc}</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-muted font-mono">
                github.com/aimen08/shotx
              </span>
              <div class="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:bg-textPrimary group-hover:text-bg transition-colors">
                <div class="w-4 h-4 i-ri-arrow-right-up-line" />
              </div>
            </div>
          </div>
        </div>
      </a>

      <div class="text-xs text-muted font-mono mb-6">
        {totalCount} projects · {projectGroups.length + 1} categories
      </div>

      <For each={projectGroups}>
        {(group) => (
          <div class="mt-10 first:mt-0">
            <div class="flex items-center gap-3 mb-5">
              <span class="text-xs text-textPrimary uppercase tracking-[0.3em]">
                {group.category}
              </span>
              <span class="text-[10px] text-muted font-mono">
                ({String(group.items.length).padStart(2, "0")})
              </span>
              <div class="flex-1 h-px bg-stroke" />
            </div>
            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <Index each={group.items}>
                {(item) => <ProjectItem data={item()} />}
              </Index>
            </div>
          </div>
        )}
      </For>
    </section>
  );
};
