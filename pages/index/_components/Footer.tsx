export default () => {
  return (
    <footer class="mt-20 py-8 border-t border-stroke flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="relative flex items-center justify-center w-3 h-3">
          <span class="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75" />
          <span class="relative rounded-full w-2 h-2 bg-green-500" />
        </div>
        <span class="text-sm text-muted">Available for projects</span>
      </div>
      <p class="text-sm text-muted">
        Aymen © {new Date().getFullYear()}
      </p>
    </footer>
  );
};
