import { ActionButton } from "../ActionButton";

export const SectionDownload = () => {
  return (
    <section className="mb-40 flex flex-col gap-8 text-center">
      <h2 className="text-3xl font-bold text-color-title lg:text-4xl">
        Clipboard for iOS and Mac OS
      </h2>
      <p className="mx-auto max-w-prose text-base text-color-text lg:text-xl">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <div className="flex w-full flex-col gap-8 text-white sm:flex-row sm:justify-center">
        <ActionButton color="primary">Download for IOS</ActionButton>
        <ActionButton color="secundary">Download for Mac</ActionButton>
      </div>
    </section>
  );
};
