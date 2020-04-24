import React from "react"
import Navbar from "../components/navbar/navbar"
import SayHello from "../components/say-hello/sayHello"
import Footer from "../components/footer/footer"
import "./styles.css"
import {graphql, useStaticQuery} from "gatsby"

const HomeLayout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <div>{props.children}</div>
      <SayHello />
      <Footer />
    </React.Fragment>
  )
}

export default HomeLayout;
