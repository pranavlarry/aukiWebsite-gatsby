import React from "react"
import Navbar from "../components/navbar/navbar"
import SayHello from "../components/say-hello/sayHello"
import Footer from "../components/footer/footer"
import "./styles.css"

const HomeLayout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <div>{props.children}</div>
      <SayHello case={props.case}/>
      <Footer />
    </React.Fragment>
  )
}

export default HomeLayout;
