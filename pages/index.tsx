import { useContext } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import { GlobalContext, MainLayoutContext } from "@/contexts";
import { BasicCalendar, BasicRangeCalendar, BasicSortable, Button, MainLayout } from "@/components";
import { theme } from "@/style";
import { Input } from "@chakra-ui/react";

const Home: NextPage = () => {
  const global = useContext(GlobalContext);
  const mainContext = useContext(MainLayoutContext);

  return (
    <MainLayout title="test">
      <Main>
        <Logo>
          Welcome {global.state.loginState ? "ha" : "ho"} {mainContext.main ? "true" : "false"}
        </Logo>
        <Form>
          <BasicCalendar />
          <BasicRangeCalendar />
          <InputStyled type="text" name="id"></InputStyled>
          <InputStyled type="password" name="pw"></InputStyled>
          <Button />
          <Input placeholder="Basic usage" />
          <BasicSortable />
        </Form>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Main>
    </MainLayout>
  );
};

const Main = styled.div`
  height: 100vh;
`;

const Form = styled.form`
  width: 300px;
  margin: auto;
`;

const Logo = styled.div`
  font-size: 50px;
  text-align: center;
  margin: 200px auto 50px;
  &:hover {
    + ${Form} {
      background: ${theme.colors.Gray100};
    }
  }
`;

const InputStyled = styled.input`
  text-align: center;
  width: 200px;
  padding: none;
  margin: 10px auto;
  display: block;
  font-family: auto;
  border: 1px solid black;
  border-radius: 3px;
`;

export default Home;
