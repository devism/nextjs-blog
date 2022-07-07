import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { createClient } from '../prismicio';
import { RichText } from 'prismic-reactjs';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';



export async function getStaticProps({ previewData }) {
  const allPostsData = getSortedPostsData();
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  return {
    props: { page, allPostsData }, // Will be passed to the page component as props
  }
}



export default function Home({page}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <div>
        
         <RichText render={page.data.homeText} />
          {console.log(page)}
          {/* this works */}
         <RichText render={page.data.slices[0].primary.title} />
         {/* this doesn't */}
         <RichText render={slice.primary.title} />
          {/* <SliceZone slices={page.data.slices} components={components} /> */}
         
        
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}