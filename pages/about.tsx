import type { NextPage } from "next";
import styled from "styled-components";
import { Button, MainLayout } from "@/components";
import { theme } from "@/style";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <MainLayout title="test">
      <Main>
        <Logo>About</Logo>
        <Link href="/">
          <a>Home</a>
        </Link>
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
