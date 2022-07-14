import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';




const name = 'Jason Begin - Sound Designer';
export const siteTitle = 'Jason Begin - Sound Designer';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jason Begin - Sound Designer"
        />
    
        <meta name="og:title" content={siteTitle} />
      
      </Head>
     
      <main>{children}</main>
      
    </div>
  );
}