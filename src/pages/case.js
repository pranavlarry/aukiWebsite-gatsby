import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HomeLayout from "../template/homepage"
import CaseSlide from "../components/case-study/caseSlide"
import Breadcrumb from "../components/breadcrumb/breadcrumb"

const Case = props => {
  let data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { tag: { in: ["aem", "ecom", "fend"] } } }
      ) {
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
  var aemdata = [],
    ecomdata = [],
    fenddata = []
  data.forEach(val => {
    if (val.node.frontmatter.tag === "aem") aemdata.push(val.node)
    if (val.node.frontmatter.tag === "fend") fenddata.push(val.node)
    if (val.node.frontmatter.tag === "ecom") ecomdata.push(val.node)
  })

  return (
    <HomeLayout>
      <Breadcrumb links={window.location.pathname.split("/")} />
      <CaseSlide aemdata={aemdata} ecomdata={ecomdata} fenddata={fenddata} />
    </HomeLayout>
  )
}

export default Case
