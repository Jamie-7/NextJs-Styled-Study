import type { NextPage } from "next";
import styled from "styled-components";
import { Button, MainLayout } from "@/components";
import { theme } from "@/style";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext, MainLayoutContext } from "@/contexts";

const Home: NextPage = () => {
  const global = useContext(GlobalContext);
  const mainContext = useContext(MainLayoutContext);
  return (
    <MainLayout title="test">
      <Main>
        <Logo>
          About {global.state.loginState ? "ha" : "ho"} {mainContext.main ? "true" : "false"}
        </Logo>
        <Link href="/">
          <a>Home</a>
        </Link>
        <button
          onClick={() => {
            global.dispatch({ type: "login" });
          }}
        >
          Dispatch
        </button>
      </Main>
    </MainLayout>
  );
};

const Main = styled.div`
  height: 100vh;
`;

const Logo = styled.div`
  font-size: 50px;
  text-align: center;
  margin: 200px auto 50px;
`;

export default Home;
