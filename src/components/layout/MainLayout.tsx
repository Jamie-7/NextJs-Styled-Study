import Head from "next/head";
import { PropsWithChildren } from "react";

interface LayoutType extends PropsWithChildren {
  title: string;
}

export const MainLayout: React.FC<LayoutType> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
};
