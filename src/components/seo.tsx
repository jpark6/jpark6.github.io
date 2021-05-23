/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
// @ts-ignore
import PropTypes from "prop-types"
// @ts-ignore
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
interface seoProps {
  title: string
  description?: string
  lang: string
  meta?: []
}
const defaultSeoProps: seoProps = {
  title: 'Gatsby Mdx Page',
  description: 'Gatsby Mdx Page',
  lang: 'ko',
  meta: [],
}
export default function Seo({ description, lang, meta, title }: seoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const defaultDescription = description || site.siteMetadata.description || defaultSeoProps.description
  const defaultTitle = site.siteMetadata.title || defaultSeoProps.title
  const defaultLang = lang || defaultSeoProps.lang
  const defaultMeta = [
    { name: `description`, content: defaultDescription, },
    { property: `og:title`, content: defaultTitle, },
    { property: `og:description`, content: defaultDescription, },
    { property: `og:type`, content: `website`, },
    { name: `twitter:card`, content: `summary`, },
    { name: `twitter:creator`, content: site.siteMetadata?.author || ``, },
    { name: `twitter:title`, content: defaultTitle, },
    { name: `twitter:description`, content: defaultDescription, },
  ].concat(meta||[]);

  return (
    <Helmet
      htmlAttributes={{
        defaultLang,
      }}
      title={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={defaultMeta}
    />
  )
}
