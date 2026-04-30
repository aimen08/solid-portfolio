interface Props {
  data: {
    name: string;
    desc: string;
    link: string;
    icon: string;
    iconImg?: string;
    users?: string;
    stack?: string[];
  };
}

export default (props: Props) => {
  const { data } = props;
  return (
    <a
      class="relative px-5 py-5 rounded-2xl bg-surface/60 backdrop-blur-sm border border-stroke transition-all decoration-none hover:bg-stroke/40 hover:-translate-y-0.5 group flex flex-col h-full"
      href={data.link}
      target="_blank"
    >
      <div class="flex items-start gap-4 flex-1">
        <div class="text-4xl shrink-0">
          {data.iconImg ? (
            <img
              src={data.iconImg}
              alt={`${data.name} icon`}
              class="w-10 h-10 rounded-lg object-contain"
            />
          ) : (
            <div class={data.icon} />
          )}
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-display italic text-2xl text-textPrimary leading-tight group-hover:translate-x-1 transition-transform">
            {data.name}
          </div>
          <div class="text-muted font-normal text-sm mt-2 leading-relaxed">
            {data.desc}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between mt-4 pt-4 border-t border-stroke/60">
        <div class="flex items-center gap-1">
          {data.stack?.map((item) => (
            <div class="flex items-center rounded-full bg-bg/60 border border-stroke p-[4px]">
              <img class="w-3.5 h-3.5" src={`/images/${item}.svg`} />
            </div>
          ))}
        </div>
        {data.users ? (
          <div class="text-[10px] font-mono text-textPrimary bg-bg/60 border border-stroke rounded-full px-2 py-0.5">
            {data.users}
          </div>
        ) : (
          <div class="w-7 h-7 rounded-full border border-stroke flex items-center justify-center group-hover:bg-textPrimary group-hover:text-bg transition-colors">
            <div class="w-3 h-3 i-ri-arrow-right-up-line" />
          </div>
        )}
      </div>
    </a>
  );
};
