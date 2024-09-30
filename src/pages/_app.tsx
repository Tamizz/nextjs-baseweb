import React from 'react';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {styletron} from '../styletron';
import type { AppProps } from 'next/app';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
