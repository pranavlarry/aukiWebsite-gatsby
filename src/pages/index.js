import React from "react"
import HomeLayout from "../template/homepage"
import GenericInfoCaller from "../components/genericinfo/GenericInfoCaller"
import WhyAuki from "../components/whyauki/WhyAuki"
import WeAreAuki from "../components/weareauki/WeAreAuki"
import CaseSlide from "../components/case-study/caseSlide";
import { graphql, useStaticQuery } from "gatsby"

const HomePage = props => {
  let data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { tag: { in: ["aem", "ecom", "fend"] } } }
      ) {
        edges {
          node {
            frontmatter {
              shortDesc
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
    fenddata = [];
  data.forEach(val => {
    if (val.node.frontmatter.tag === "aem") aemdata.push(val.node)
    if (val.node.frontmatter.tag === "fend") fenddata.push(val.node)
    if (val.node.frontmatter.tag === "ecom") ecomdata.push(val.node)
  })
  return (
    <HomeLayout>
      <WeAreAuki />
      <GenericInfoCaller />
      <WhyAuki />
      <CaseSlide aemdata={aemdata} ecomdata={ecomdata} fenddata={fenddata}/>
    </HomeLayout>
  )
}

export default HomePage
