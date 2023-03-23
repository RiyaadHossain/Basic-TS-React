import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({ title = 'My Sub-heading', children }: SectionProps) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{children}</p>
    </>
  );
};
