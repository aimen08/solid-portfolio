export default () => {
  return (
    <a
      href="https://evominx.aymenhamza.com/"
      target="_blank"
      class="group block rounded-3xl bg-surface border border-stroke overflow-hidden transition-all decoration-none hover:border-stroke/80 mt-16 relative"
    >
      <div class="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-700">
         <img src="/images/earth.jpeg" alt="Background" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
         <div class="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent"></div>
         <div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent"></div>
      </div>
      
      <div class="relative z-10 w-full h-full flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-10">
        <div class="w-16 h-16 rounded-2xl bg-bg/80 backdrop-blur-md flex items-center justify-center border border-stroke flex-shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform shadow-lg">
          <span class="font-display italic text-2xl font-bold text-textPrimary relative z-10">EV</span>
        </div>
        
        <div class="flex-grow text-center md:text-left">
          <div class="text-xs text-muted uppercase tracking-[0.3em] mb-2">My Agency</div>
          <h3 class="text-2xl md:text-3xl font-display text-textPrimary mb-2 group-hover:translate-x-1 transition-transform">
            Evominx <span class="italic">Agency</span>
          </h3>
          <p class="text-sm md:text-base text-muted max-w-lg mx-auto md:mx-0 drop-shadow-md">
            We build high-converting Shopify stores, fast landing pages, and powerful custom apps to scale your brand.
          </p>
        </div>

        <div class="flex-shrink-0">
          <div class="relative group-hover:scale-105 transition-transform rounded-full border border-stroke px-6 py-3 flex items-center gap-2 overflow-hidden bg-surface/50 backdrop-blur-md group-hover:bg-textPrimary group-hover:text-bg shadow-xl">
             <span class="text-sm font-medium relative z-10">Visit Agency</span>
             <div class="w-4 h-4 relative z-10 i-ri-arrow-right-up-line" />
          </div>
        </div>
      </div>
    </a>
  );
};