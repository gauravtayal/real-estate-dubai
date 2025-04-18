import React from "react";

type SectionLayoutProps = {
  children: JSX.Element;
  className?: string;
  classTitle?: string;
  title?: string;
  pClass?: string;
  paragraph?: string;
};

const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  className,
  title,
  classTitle,
  pClass,
  paragraph,
}) => {
  return (
    <section className={` ${className}`}>
      <div className="max-w-[1210px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="w-full">
          <div>
            <h1 className={` ${classTitle}`}>{title}</h1>
            <p className={`${pClass}`}>{paragraph}</p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};
export default SectionLayout;
