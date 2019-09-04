import React from 'react'
import Link from 'gatsby-link'
import Posts from '../templates/posts.js'
const IndexPage = () => (
  <div>
    <h1>Hello World</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Posts />
  </div>
)

export default IndexPage
