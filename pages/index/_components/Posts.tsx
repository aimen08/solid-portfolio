import { createResource, Index, Suspense } from "solid-js";
import dayjs from "dayjs";
import { getLatestPosts } from "../api";
import type { PostMeta } from "../api";

interface PostProps {
  data: PostMeta;
}

const PostItem = (props: PostProps) => {
  const { data } = props;
  return (
    <a
      href={data.url}
      target="_blank"
      class="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-transparent hover:bg-surface/30 border border-transparent hover:border-stroke rounded-[40px] sm:rounded-full transition-colors cursor-pointer w-full text-left my-2"
    >
      <div class="flex-grow flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
         <h3 class="text-lg md:text-2xl font-medium group-hover:translate-x-1 transition-transform text-textPrimary">
           {data.title}
         </h3>
         <div class="hidden lg:block flex-grow h-px bg-stroke/30" style={{ "background-image": "linear-gradient(to right, var(--c-stroke) 50%, transparent 50%)", "background-size": "8px 1px", "background-color": "transparent" }} />
      </div>
      
      <div class="flex items-center gap-4 sm:ml-auto shrink-0">
        <div class="flex items-center gap-2 text-xs md:text-sm text-muted whitespace-nowrap">
          <span>{dayjs(data.published_at).format("MMM DD, YYYY")}</span>
        </div>
        <div class="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:bg-surface transition-colors">
          <div class="w-4 h-4 text-textPrimary i-ri-arrow-right-up-line" />
        </div>
      </div>
    </a>
  );
};

export default () => {
  const [postLists] = createResource(getLatestPosts);
  const openLink = () => {
    window.open("https://blog.aymenhamza.com", "_blank");
  };
  return (
    <>
      <div class="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span flex-1 class="text-4xl md:text-5xl font-display italic text-textPrimary">
          Latest Posts
        </span>
        <div
          onClick={openLink}
          class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer text-textPrimary"
        >
          <div class="m-2 i-ri-arrow-right-up-line"></div>
        </div>
      </div>
      <div class="grid grid-cols-1 -mx-2">
        <Suspense fallback={<div class="p-4 text-muted">Loading posts...</div>}>
          <Index each={postLists()}>{(item) => <PostItem data={item()} />}</Index>
        </Suspense>
      </div>
    </>
  );
};