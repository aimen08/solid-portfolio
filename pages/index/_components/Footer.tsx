export default () => {
  const links = {
    Work: [
      { label: "Projects", href: "https://github.com/aimen08" },
      { label: "Agency", href: "https://evominx.aymenhamza.com/" },
      { label: "ShotX", href: "https://github.com/aimen08/shotx" },
    ],
    Connect: [
      { label: "Email", href: "mailto:haydaaymen@gmail.com" },
      { label: "Github", href: "https://github.com/aimen08" },
      { label: "Twitter", href: "https://twitter.com/AimenMT2" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aimen-hamza/" },
    ],
    Read: [
      { label: "Blog", href: "https://blog.aymenhamza.com" },
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCEAEDAO5IOveScplJrKl0QA",
      },
    ],
  };

  return (
    <footer class="mt-28 pt-12 border-t border-stroke">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div class="col-span-2 md:col-span-1">
          <div class="font-display italic text-3xl text-textPrimary mb-3">
            Aymen.
          </div>
          <p class="text-sm text-muted max-w-xs">
            Building products with care from Algiers.
          </p>
        </div>
        {Object.entries(links).map(([heading, items]) => (
          <div>
            <div class="text-xs text-muted uppercase tracking-[0.3em] mb-4">
              {heading}
            </div>
            <ul class="flex flex-col gap-2 list-none p-0 m-0">
              {items.map((link) => (
                <li>
                  <a
                    href={link.href}
                    target="_blank"
                    class="text-sm text-textPrimary/80 hover:text-textPrimary decoration-none transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-stroke">
        <div class="flex items-center gap-3">
          <div class="relative flex items-center justify-center w-3 h-3">
            <span class="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75" />
            <span class="relative rounded-full w-2 h-2 bg-green-500" />
          </div>
          <span class="text-sm text-muted">Available for projects</span>
        </div>
        <p class="text-sm text-muted font-mono">
          © {new Date().getFullYear()} · Aymen Hamza
        </p>
      </div>
    </footer>
  );
};
