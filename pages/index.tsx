import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import { Button, MainLayout } from "@/components";
import { theme } from "@/style";

const Home: NextPage = () => {
  return (
    <MainLayout title="test">
      <Main>
        <Logo>Welcome</Logo>
        <Form>
          <Input type="text" name="id"></Input>
          <Input type="password" name="pw"></Input>
          <Button />
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

const Input = styled.input`
  text-align: center;
  width: 200px;
  padding: none;
  margin: 10px auto;
  display: block;
  font-family: auto;
`;

export default Home;
