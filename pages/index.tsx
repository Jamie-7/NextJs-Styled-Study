import type { NextPage } from "next";
import styled from "styled-components";
import { MainLayout } from "@/components";
import { theme } from "@/style";
import { Test } from "@/components";

const Home: NextPage = () => {
  return (
    <MainLayout title="test">
      <Main>
        안녕
        <div>What!!</div>
        <Test />
      </Main>
    </MainLayout>
  );
};

const Main = styled.div`
  background: ${theme.colors.Gray100};
  color: black;
  @media (max-width: 1000px) {
    color: white;
  }
`;

export default Home;
