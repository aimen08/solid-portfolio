interface Props {
  data: {
    name: string;
    desc: string;
    link: string;
    icon: string;
    users?: string;
    stack?: string[];
  };
}

export default (props: Props) => {
  const { data } = props;
  return (
    <a
      class="px-5 py-4 relative rounded-2xl bg-surface border border-stroke transition-colors decoration-none hover:bg-stroke/50 group"
      href={data.link}
      target="_blank"
    >
      <div class="flex h-full items-center justify-center">
        <div mr-4 text-4xl>
          <div class={data.icon} />
        </div>
        <div flex-1>
          <div class="font-display italic text-2xl text-textPrimary leading-relaxed group-hover:translate-x-1 transition-transform">
            {data.name}
          </div>
          <div class="text-muted font-normal text-sm mt-1">
            {data.desc}
          </div>
        </div>
      </div>
      {data.users && (
        <div class="flex justify-center items-center absolute right-3 bottom-3 rounded-md px-2 text-[12px] h-5 bg-textPrimary text-bg">
          {data.users}
        </div>
      )}
      {data.stack && (
        <div class="flex justify-center items-center absolute right-3 -top-3 gap-1">
          {data.stack.map((item) => (
            <div class="flex items-center rounded-full bg-surface border border-stroke p-[4px]">
              <img class="w-4 h-4" src={`/images/${item}.svg`} />
            </div>
          ))}
        </div>
      )}
    </a>
  );
};
