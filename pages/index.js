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



export async function getStaticProps({ previewData }) {

  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')
  const nav = await client.getSingle('navigation')

 

  return {
    props: { page, nav}, // Will be passed to the page component as props
  }
}



export default function Home({page, nav}) {

  function mobileMenu(){
    alert('EW');
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <div onClick={mobileMenu} className={styles.menu_button}><h2>Menu</h2></div>
      
      <div className={styles.mobile_menu_wrapper}>
        
      
        <nav className={styles.navmobile}>
      
          <PrismicLink href="/">
            <p>HOME</p>
          </PrismicLink>
        

          {nav.data.navlinks.map( (element) => (
            <a href={Link.url(element.pagelink)}>
            <RichText render={element.linktext} />
            </a>
          
            ))
          }
        </nav>
        </div>  
      <header className={styles.header}>

       

        <div>
        <img src={nav.data.navImage.url} alt={nav.data.navImage.alt} />
        </div>

        


        <nav className={styles.navigation}> 

        <PrismicLink href="/">
          <p>HOME</p>
        </PrismicLink>
       
         {/* <a href={Link.url(nav.data.navlinks[0].pagelink)}>
           <RichText render={nav.data.navlinks[0].linktext} />
           </a> */}

         {/* <a href={Link.url(nav.data.navlinks[1].pagelink)}>
           <RichText render={nav.data.navlinks[1].linktext} />
         </a>   */}
         {nav.data.navlinks.map( (element) => (
          <a href={Link.url(element.pagelink)}>
          <RichText render={element.linktext} />
          </a>
         
          ))
         }

          
        </nav>
        { console.log(nav)}
      </header>
     
      <div>
        
         <RichText render={page.data.homeText} />
          {console.log(page)}
          {/* this works */}
        
          
        
         
        
      </div>

    </Layout>
  );
}