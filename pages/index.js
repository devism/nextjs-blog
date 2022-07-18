import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';

import Date from '../components/date';
import { createClient } from '../prismicio';
import { RichText } from 'prismic-reactjs';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import { Link } from 'prismic-reactjs';
import { PrismicLink } from '@prismicio/react';
import { useState } from 'react';


export async function getStaticProps({ previewData }) {

  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')
  const nav = await client.getSingle('navigation')

 

  return {
    props: { page, nav}, // Will be passed to the page component as props
  }
}



export default function Home({page, nav}) {

  const [isMenuOpen, setMenu] = useState(false);

  const mobileMenuClass = isMenuOpen ?  `${styles.show_menu}` : ` ${styles.hide_menu}`

  // hamburgerlines
  // const [hamLines, setHamLines] = useState(false);

  const hamburgerLinesClass = isMenuOpen ? `${styles.ham_animate}`: `${styles.hamburger}`

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <div onClick={() => setMenu(!isMenuOpen) } className={styles.menu_button}>
          <div className={styles.ham_wrapper}>
            <div className={hamburgerLinesClass}></div>
            <div className={hamburgerLinesClass}></div>
            <div className={hamburgerLinesClass}></div>
          </div>
      </div>
      
      <div className={ mobileMenuClass }>
        
        <nav className={styles.navmobile}>

          <PrismicLink href="/blog">
            <p>Blog</p>
          </PrismicLink>

          <PrismicLink href="/blog">
            <p>Store</p>
          </PrismicLink>

          <PrismicLink href="/media">
            <p>Media</p>
          </PrismicLink>

          <PrismicLink href="/contact">
            <p>Contact</p>
          </PrismicLink>
      
          {/* {nav.data.navlinks.map( (element) => (
            <a href={Link.url(element.pagelink)}>
            <RichText render={element.linktext} />
            </a>
          
            ))
          } */}
        </nav>
      </div>  
      <header className={styles.header}>

      <div className={styles.logo_title}>   
        <PrismicLink href="/">
          <img src={nav.data.navImage.url} alt={nav.data.navImage.alt} />
        </PrismicLink>
        <div>
          <h1 className={styles.main_title}>Jason Begin Sound</h1>
        </div>
       
      </div>   
      
     
        

          {/* desktop nav */}
      <nav className={styles.navigation}> 
          <PrismicLink href="/blog">
            <p>Blog</p>
          </PrismicLink>

          <PrismicLink href="/blog">
            <p>Store</p>
          </PrismicLink>

          <PrismicLink href="/media">
            <p>Media</p>
          </PrismicLink>

          <PrismicLink href="/contact">
            <p>Contact</p>
          </PrismicLink>


         {/* {nav.data.navlinks.map( (element) => (
          <a href={Link.url(element.pagelink)}>
          <RichText render={element.linktext} />
          </a>
         
          ))
         }           */}
      </nav>
    
      </header>
     
      <div>
        
         {/* <RichText render={page.data.homeText} /> */}
    
        
          
        
         
        
      </div>

    </Layout>
  );
}