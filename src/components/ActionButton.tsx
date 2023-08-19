import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  color: "primary" | "secundary";
}

export const ActionButton: React.FC<Props> = ({ color, children }) => {
  const styles = `w-full rounded-full border-b-4 border-b-black/25 p-4
  text-lg text-white shadow-lg transition duration-150 hover:opacity-70
  active:translate-y-[2px] active:border-b-transparent sm:w-auto sm:px-8`;

  const colorVariants = {
    primary: "bg-primary shadow-primary/30",
    secundary: "bg-secundary shadow-secundary/30",
  };

  return (
    <button className={`${styles}, ${colorVariants[color]}`}>{children}</button>
  );
};
