interface Props {
  number: string;
  title: string;
  italic?: string;
  href?: string;
  onClick?: () => void;
}

export default (props: Props) => {
  return (
    <div class="flex items-end gap-4 mt-20 mb-8">
      <div class="flex items-baseline gap-3 flex-1 min-w-0">
        <span class="text-xs text-muted uppercase tracking-[0.3em] font-mono shrink-0">
          {props.number}
        </span>
        <div class="hidden sm:block flex-1 h-px bg-stroke mb-2" />
        <h2 class="text-3xl md:text-5xl font-display text-textPrimary truncate">
          {props.title}{" "}
          {props.italic && <span class="italic">{props.italic}</span>}
        </h2>
      </div>
      {(props.href || props.onClick) && (
        <a
          href={props.href}
          target="_blank"
          onClick={props.onClick}
          class="op-50 hover:op-100 transition-opacity cursor-pointer text-textPrimary shrink-0 mb-2"
        >
          <div class="m-2 i-ri-arrow-right-up-line" />
        </a>
      )}
    </div>
  );
};
