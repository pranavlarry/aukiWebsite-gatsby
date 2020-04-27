import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HomeLayout from "../../template/homepage"
import CaseStudyExpand from "../../components/case-study/caseStudyExpand"

const AemCase = props => {
  let data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { tag: { eq: "aem" } } }) {
        edges {
          node {
            frontmatter {
              shortDesc
              desc
              problem
              outcome
              whatWeDid
              tag
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  data = [...data.allMarkdownRemark.edges]
  if (props.location.state) {
    const selected = props.location.state.selected
    let loc
    data.forEach((val, index) => {
      if (selected === val.node.fields.slug) {
        loc = index
        return
      }
    })
    const select = data.splice(loc, 1)
    data = [select[0], ...data]
  }

  return (
    <HomeLayout case={true}>
      <CaseStudyExpand formateData={data} isMob={false} />
    </HomeLayout>
  )
}

export default AemCase
