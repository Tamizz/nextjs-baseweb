import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/HeaderNavigation';
import HomePage from '../components/Home-page';
import { styletron } from '../styletron';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  [data-baseweb="header-navigation"] {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  margin-top: 64px; // Adjust this value based on your header height
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

function Home() {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <GlobalStyles />
        <Wrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <Content>
            <HomePage />
          </Content>
        </Wrapper>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default Home;
