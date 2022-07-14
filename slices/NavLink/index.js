import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'



const NavLink = ({ slice }) => (
  <section>
    <a  href={Link.url(slice.primary.navlink)}>My Link</a>
  </section>
)

export default NavLink