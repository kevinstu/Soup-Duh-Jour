
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      hero: file(absolutePath: { regex: "/hero.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const hero = data?.hero?.childImageSharp?.fluid

  return (
    <div className="hero">
      {hero && (
        <Image
          fluid={hero}
          className="hero-image"
        />
      )}
    </div>
  )
}

export default Hero
