import App, { Container } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import Layout from '../components/Layout';

NProgress.configure({
  showSpinner: false,
  trickle: true
})

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: { Component: any, ctx: any }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}