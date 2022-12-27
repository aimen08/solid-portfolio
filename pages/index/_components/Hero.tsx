import Socials from "./Socials";

export default () => {
  return (
    <header class="mt-12 md:mt-18">
      <h1 class="title text-5xl font-bold">
        <span class="block">Hello, </span>
        <span class="block mt-2">I'm Aymen.</span>
      </h1>
      <div class="mt-6">
        <div>
          <span>Full Stack developer / Software engineer.</span>
        </div>
        <div mt-2 all:transition-400>
          <span>
            Currently working at{" "}
            <a
              target="_blank"
              href="https://legal-doctrine.com/"
              class="underline cursor-pointer hover:color-[#008578]"
            >
              Legal Doctrine.
            </a>
          </span>
        </div>
        <div mt-2>
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
