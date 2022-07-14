import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';

// import Link from 'next/link';
import Date from '../components/date';
import { createClient } from '../prismicio';
import { RichText } from 'prismic-reactjs';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import { Link } from 'prismic-reactjs';
import { PrismicLink } from '@prismicio/react';


export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData })
  
    const blog = await client.getSingle('blog')
    const nav = await client.getSingle('navigation')
 
  
    return {
      props: { blog,nav }, // Will be passed to the page component as props
    }
}


function Blog({blog, nav}){
    return (
        <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
  
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
        <header className={styles.header}>
  
           
  
          <div>
          <img src={nav.data.navImage.url} alt={nav.data.navImage.alt} />
          </div>
  
          
  
  
          <nav className={styles.navigation}> 
         
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
        
        </header>
       
        <div>
             
           <RichText render={blog.data.title} />

          
        </div>
  
      </Layout>
    )
}

export default Blog