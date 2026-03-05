import Socials from "./Socials";

export default () => {
  return (
    <header class="mt-12 md:mt-18">
      <div class="text-xs text-muted uppercase tracking-[0.3em] mb-4">Evominx Agency</div>
      <h1 class="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-textPrimary mb-6">
        <span class="block">Hello, </span>
        <span class="block mt-2">I'm Aymen.</span>
      </h1>
      <div class="mt-6">
        <div class="text-xl md:text-2xl font-display text-textPrimary mb-6">
          <span>Crafting <span class="font-display italic text-textPrimary">Shopify Stores</span> that convert.</span>
        </div>
        <div class="text-sm md:text-base text-muted max-w-md mb-12">
          <span>
            Software developer with a love for problem-solving and building
            user-friendly apps.
          </span>
        </div>
      </div>
      <Socials />
    </header>
  );
};
