import { ActionButton } from "../ActionButton";

export const SectionClipboard = () => {
  return (
    <section className="flex flex-col items-center gap-8 pt-32 text-center">
      <img src="/src/images/logo.svg" alt="Clipboard logo" className="mb-8" />
      <h2 className="text-3xl font-bold text-color-title lg:text-5xl">
        A history of everything you copy
      </h2>
      <p className="mb-8 max-w-prose text-base text-color-text lg:text-xl">
        Clipboard allows you to track and organize everything you copy.s
        Instantly access your clipboard on all your devices.
      </p>
      <div className="flex w-full flex-col gap-8 text-white sm:flex-row sm:justify-center">
        <ActionButton color="primary">Download for IOS</ActionButton>
        <ActionButton color="secundary">Download for Mac</ActionButton>
      </div>
    </section>
  );
};
