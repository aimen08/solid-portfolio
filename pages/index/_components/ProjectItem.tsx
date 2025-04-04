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
      class="px-4 py-3 relative rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
      href={data.link}
      target="_blank"
    >
      <div class="flex h-full items-center justify-center">
        <div mr-4 text-4xl>
          <div class={data.icon} />
        </div>
        <div flex-1>
          <div font-medium leading-relaxed>
            {data.name}
          </div>
          <div op-50 font-normal text-sm>
            {data.desc}
          </div>
        </div>
      </div>
      {data.users && (
        <div class="flex justify-center items-center absolute right-2 rounded-md w-20 text-[12px] h-5 bg-red-400 text-white dark:bg-red-800/70">
          {data.users}
        </div>
      )}
      {data.stack && (
        <div class="flex justify-center items-center absolute right-2 -top-3 gap-1">
          {data.stack.map((item) => (
            <div class="flex items-center rounded-full bg-gray-50 dark:bg-gray-50/10 p-[4px]">
              <img class="w-4 h-4" src={`/images/${item}.svg`} />
            </div>
          ))}
        </div>
      )}
    </a>
  );
};
