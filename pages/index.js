import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/util.module.css';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Full stack Software engineer.</p>
        <p>
          I'm new to Next.js. This is a sample web application built with Next.js.
        </p>
      </section>
    </Layout>
  )
};

export default Home;