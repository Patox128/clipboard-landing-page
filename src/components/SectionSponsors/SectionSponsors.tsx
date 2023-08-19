import google from "../../images/logo-google.png";
import ibm from "../../images/logo-ibm.png";
import microsoft from "../../images/logo-microsoft.png";
import hp from "../../images/logo-hp.png";
import vector from "../../images/logo-vector-graphics.png";

export const SectionSponsors = () => {
  return (
    <section className="mb-48 flex flex-col flex-wrap items-center justify-center gap-24 sm:flex-row">
      <img src={google} alt="google" />
      <img src={ibm} alt="ibm" />
      <img src={microsoft} alt="microsoft" />
      <img src={hp} alt="hp" />
      <img src={vector} alt="vector graphics" />
    </section>
  );
};
