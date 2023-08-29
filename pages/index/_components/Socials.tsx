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
      class={`inline-flex px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none ${data.class} hover:text-white dark:bg-gray-50/10`}
      href={data.link}
      target="_blank"
    >
      <div text-xl>
        <div class={data.icon} />
      </div>
      <Show when={data.text}>
        <div text-sm ml-1>
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
      class: "hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900",
    },
    {
      text: "Blog",
      link: "https://blog.aymenhamza.com",
      icon: "i-ri-book-2-line",
      class: "hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900",
    },
    {
      text: "",
      link: "https://twitter.com/AimenMT2",
      icon: "i-fa-brands-twitter",
      class: "hover:bg-[#00ACEE]",
    },
    {
      text: "",
      link: "https://mastodon.social/@aymenmt",
      icon: "i-fa-brands-mastodon",
      class: "hover:bg-[#3088d4]",
    },
    {
      text: "",
      link: "https://www.instagram.com/aymenmt77/",
      icon: "i-fa-brands-instagram",
      class: "hover:bg-gradient-to-r from-[#fd5949] to-[#d6249f]",
    },
    {
      text: "",
      link: "https://www.linkedin.com/in/aimen-hamza/",
      icon: "i-fa-brands-linkedin",
      class: "hover:bg-[#0077b5]",
    },
  ];

  return (
    <div mt-4>
      <Index each={socialLists}>{(item) => <SocialItem data={item()} />}</Index>
    </div>
  );
};
