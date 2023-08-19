import devices from "../../images/image-devices.png";

export const SectionAccess = () => {
  return (
    <section className="mt-80 text-center">
      <h2 className="mb-8 text-3xl font-bold text-color-title lg:text-4xl">
        Access Clipboard anywhere
      </h2>
      <p className="mx-auto mb-16 max-w-3xl text-base text-color-text lg:text-xl">
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <img src={devices} alt="devices" className="mx-auto" />
    </section>
  );
};
