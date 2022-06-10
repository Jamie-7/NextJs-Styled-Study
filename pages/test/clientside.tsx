import type { NextPage } from "next";
import styled from "styled-components";
import { MainLayout } from "@/components";
import { gql, useMutation, useQuery } from "@apollo/client";
import { MouseEventHandler } from "react";
import Head from "next/head";

const QUERY = gql`
  # Write your query or mutation here
  mutation Mutation($loginAgentInput: LoginAgentInput!) {
    userLogin(loginAgentInput: $loginAgentInput) {
      info {
        AIdx
        AgentGrade
        AgentName
        DomainNo
        PIdx
        RID
      }
      result {
        Result
      }
    }
  }
`;

const getCmsInfo = gql`
  query Query {
    getCmsInfo {
      BAddress
      BAddressDetail
      BusinessNumber
      CeoEmail
      CeoHp
      CeoName
      CompanyName
      Domain
      Expiration_date
      MailOrderNumber
      ManagerHp
      ManagerName
      RegDate
      ShopFax
      ShopNumber
      SiteName
    }
  }
`;

const Home: NextPage = () => {
  const [Login, { data, error, loading }] = useMutation(QUERY);
  const { data: data2, error: error2, loading: loading2 } = useQuery(getCmsInfo, { errorPolicy: "all" });

  const Func = () => {
    Login({
      variables: {
        loginAgentInput: {
          Pwd: "alfoqhtm",
          RID: "miraeboss",
        },
      },
    });
  };

  return (
    <MainLayout title="test">
      <Head>
        <title>{data2?.getCmsInfo.CeoName}</title>
      </Head>
      <Main>
        <button onClick={Func}>dd</button>
        <Logo>{data2?.getCmsInfo.CeoName}</Logo>
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
