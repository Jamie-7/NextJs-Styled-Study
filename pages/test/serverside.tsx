import type { NextPage } from "next";
import styled from "styled-components";
import { Button, MainLayout } from "@/components";
import { theme } from "@/style";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext, MainLayoutContext } from "@/contexts";
import { graphqlClient } from "@/graphql";
import { gql } from "@apollo/client";
import Head from "next/head";

export async function getServerSideProps() {
  const { data, errors } = await graphqlClient.query({
    query: gql`
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
    `,
  });
  return {
    props: data,
  };
}

const Home: NextPage = (props: any) => {
  return (
    <MainLayout title="test">
      <Head>
        <title>{props.getCmsInfo.CeoName}</title>
      </Head>
      <Main>
        <Logo>{props.getCmsInfo.CeoName}</Logo>
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
