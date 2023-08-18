import { FEATURES } from "../../constants";

export const SectionFeatures = () => {
  return (
    <section className="relative mt-32 flex flex-col gap-32 text-center md:flex-row md:text-left">
      <div className="md:w-1/2">
        <img
          src="/src/images/image-computer.png"
          alt="computer"
          className="-top-10 right-[50%] md:absolute"
        />
      </div>
      <div className="flex flex-col gap-20 md:w-1/2 md:px-20">
        {FEATURES.map((feature) => (
          <div key={feature.title}>
            <h3 className="mb-5 text-2xl font-bold text-color-title lg:text-3xl">
              {feature.title}
            </h3>
            <p className="text-base text-color-text lg:text-xl">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
