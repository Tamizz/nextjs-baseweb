import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Server } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../styletron';
import { DocumentProps } from 'next/document';
import { DocumentContext } from 'next/document';

class MyDocument extends Document<DocumentProps & { stylesheets: any[] }> {
  static async getInitialProps(context: DocumentContext) {
    const renderPage = () =>
      context.renderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          ),
      });

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage,
    });
    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...initialProps, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/styles/fonts.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
