import { NAV_ITEMS, SOCIAL_LINKS } from "../../constants/index";
import logo from "../../images/logo.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-16 bg-color-text/10 px-20 py-12 md:flex-row md:gap-24 md:px-44">
      <img src={logo} alt="Clipboard logo" className="h-[70px] w-[70px]" />
      <nav className="grid grid-cols-1 justify-items-center gap-x-32 gap-y-8 text-xl text-color-title hover:cursor-pointer md:grid-flow-col md:grid-cols-3 md:grid-rows-2 md:flex-row md:justify-items-start [&>a:hover]:text-primary">
        {NAV_ITEMS.map((nav) => (
          <a key={nav.title}>{nav.title}</a>
        ))}
      </nav>
      <div className="flex gap-12">
        {SOCIAL_LINKS.map((social) => (
          <a href={social.href} key={social.alt}>
            <img src={social.img} alt={social.alt} />
          </a>
        ))}
      </div>
    </footer>
  );
};
