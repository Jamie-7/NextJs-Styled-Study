import type { NextPage } from "next";
import styled from "styled-components";
import { MainLayout } from "@/components";
import { theme } from "@/style";

const Home: NextPage = () => {
  return (
    <MainLayout title="test">
      <Main>안녕</Main>
    </MainLayout>
  );
};

const Main = styled.div`
  background: ${theme.colors.Gray100};
`;

export default Home;
