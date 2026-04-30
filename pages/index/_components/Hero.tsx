import Socials from "./Socials";

export default () => {
  return (
    <header class="relative mt-8 md:mt-14">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div class="lg:col-span-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="relative flex items-center justify-center w-2.5 h-2.5">
              <span class="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75" />
              <span class="relative rounded-full w-2 h-2 bg-green-500" />
            </div>
            <span class="text-xs text-muted uppercase tracking-[0.3em]">
              Available for projects
            </span>
            <span class="text-xs text-muted/60">·</span>
            <span class="text-xs text-muted uppercase tracking-[0.3em]">
              Evominx Agency
            </span>
          </div>

          <h1 class="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-textPrimary mb-8">
            <span class="block">Hello,</span>
            <span class="block mt-2">I'm Aymen.</span>
          </h1>

          <p class="text-xl md:text-2xl font-display text-textPrimary mb-4 max-w-xl">
            Crafting <span class="italic">Shopify stores</span>,{" "}
            <span class="italic">bots</span> and{" "}
            <span class="italic">apps</span> that convert.
          </p>
          <p class="text-sm md:text-base text-muted max-w-md mb-8">
            Software developer with a love for problem-solving and building
            user-friendly products that ship.
          </p>

          <Socials />
        </div>

        <aside class="lg:col-span-4 lg:sticky lg:top-8">
          <div class="rounded-3xl bg-surface/60 backdrop-blur-md border border-stroke p-5 flex flex-col gap-5">
            <div class="flex items-center gap-4">
              <div class="relative w-14 h-14 rounded-2xl overflow-hidden border border-stroke shrink-0">
                <img
                  src="/avatar.jpeg"
                  alt="Aymen"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-textPrimary font-medium truncate">
                  Aymen Hamza
                </div>
                <div class="text-xs text-muted truncate">
                  Algiers · Full‑stack Dev
                </div>
              </div>
            </div>

            <div class="grid grid-cols-3 divide-x divide-stroke -mx-1">
              <div class="px-3">
                <div class="font-display italic text-2xl text-textPrimary leading-none">
                  1M+
                </div>
                <div class="text-[10px] text-muted uppercase tracking-[0.2em] mt-1">
                  Users
                </div>
              </div>
              <div class="px-3">
                <div class="font-display italic text-2xl text-textPrimary leading-none">
                  20+
                </div>
                <div class="text-[10px] text-muted uppercase tracking-[0.2em] mt-1">
                  Projects
                </div>
              </div>
              <div class="px-3">
                <div class="font-display italic text-2xl text-textPrimary leading-none">
                  7y
                </div>
                <div class="text-[10px] text-muted uppercase tracking-[0.2em] mt-1">
                  Building
                </div>
              </div>
            </div>

            <a
              href="mailto:haydaaymen@gmail.com"
              class="group flex items-center justify-between rounded-2xl bg-textPrimary text-bg px-4 py-3 decoration-none transition-transform hover:-translate-y-0.5"
            >
              <span class="text-sm font-medium">Start a project</span>
              <div class="i-ri-arrow-right-up-line text-lg group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
};
