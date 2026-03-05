import { Index, Show } from "solid-js";

interface SocialProps {
  data: {
    icon: string;
    link: string;
    class: string;
    text?: string;
  };
}

const SocialItem = (props: SocialProps) => {
  const { data } = props;
  return (
    <a
      class="inline-flex items-center px-4 py-2 mt-2 mr-2 rounded-full border border-stroke bg-surface transition-all decoration-none hover:bg-stroke/50 text-muted hover:text-textPrimary group relative"
      href={data.link}
      target="_blank"
    >
      <div text-xl class="group-hover:text-white transition-colors">
        <div class={data.icon} />
      </div>
      <Show when={data.text}>
        <div text-sm ml-2 class="font-medium group-hover:text-white transition-colors">
          {data.text}
        </div>
      </Show>
    </a>
  );
};

export default () => {
  const socialLists = [
    {
      text: "Github",
      link: "https://github.com/aimen08",
      icon: "i-ri-github-fill",
      class: "",
    },
    {
      text: "Blog",
      link: "https://blog.aymenhamza.com",
      icon: "i-ri-book-2-line",
      class: "",
    },
    {
      text: "",
      link: "https://twitter.com/AimenMT2",
      icon: "i-fa-brands-twitter",
      class: "",
    },
    {
      text: "",
      link: "https://mastodon.social/@aymenmt",
      icon: "i-fa-brands-mastodon",
      class: "",
    },
    {
      text: "",
      link: "https://www.instagram.com/aymenmt77/",
      icon: "i-fa-brands-instagram",
      class: "",
    },
    {
      text: "",
      link: "https://www.linkedin.com/in/aimen-hamza/",
      icon: "i-fa-brands-linkedin",
      class: "",
    },
  ];

  return (
    <div mt-4>
      <Index each={socialLists}>{(item) => <SocialItem data={item()} />}</Index>
    </div>
  );
};
