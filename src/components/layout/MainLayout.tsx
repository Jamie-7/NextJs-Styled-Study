import { MainLayoutContext, mainLayoutContextInit } from "@/contexts";
import Head from "next/head";
import { PropsWithChildren } from "react";

interface LayoutType extends PropsWithChildren {
  title: string;
}

export const MainLayout: React.FC<LayoutType> = ({ title, children }) => {
  return (
    <MainLayoutContext.Provider value={mainLayoutContextInit}>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </MainLayoutContext.Provider>
  );
};
