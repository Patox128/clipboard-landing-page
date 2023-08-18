import { TOOLS } from "../../constants/index";

export const SectionWorkflow = () => {
  return (
    <section className="mb-48 mt-40 text-center">
      <h2 className="mb-4 text-3xl font-bold text-color-title lg:text-4xl">
        Supercharge your workflow
      </h2>
      <p className="mb-16 text-base text-color-text lg:text-xl">
        We’ve got the tools to boost your productivity.
      </p>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-6">
        {TOOLS.map((tool) => (
          <div key={tool.title}>
            <img src={tool.img} alt={tool.alt} className="mx-auto mb-12" />
            <h3 className="mb-4 text-3xl font-bold text-color-title">
              {tool.title}
            </h3>
            <p className="text-base text-color-text lg:text-xl">{tool.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
