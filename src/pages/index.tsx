import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Grid, Cell } from 'baseui/layout-grid';

// Check these imports
import Header from '../components/HeaderNavigation';
import Sidebar from '../components/Sidebar';
import BookingTemplates from '../components/BookingTemplates';
import RecentTrips from '../components/RecentTrips';
import Suggestions from '../components/Suggestions';

import { styletron } from '../styletron';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Content = styled('div', {
  display: 'flex',
  flex: 1,
});

const Main = styled('main', {
  flex: 1,
  padding: '20px',
});

function Home() {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Wrapper>
          <Header />
          <Content>
            <Sidebar />
            <Main>
              <Grid>
                <Cell span={12}>
                  <BookingTemplates />
                </Cell>
                <Cell span={12}>
                  <RecentTrips />
                </Cell>
                <Cell span={12}>
                  <Suggestions />
                </Cell>
              </Grid>
            </Main>
          </Content>
        </Wrapper>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default Home;
