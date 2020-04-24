import React from "react"
import HomeLayout from "../template/homepage"
import GenericInfoCaller from "../components/genericinfo/GenericInfoCaller"
import WhyAuki from "../components/whyauki/WhyAuki"
import WeAreAuki from "../components/weareauki/WeAreAuki"

const HomePage = props => {
  return (
    <HomeLayout>
      <WeAreAuki />
      <GenericInfoCaller />
      <WhyAuki />
    </HomeLayout>
  )
}

export default HomePage
