import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Ammenites from '../Components/Ammenites'

const Services = () => {
  return (
    <div>
      <BreadCrumb setTitle={"Our Sevrices"} />
      <Ammenites setCol={"md:grid grid-cols-3 gap-4"} setHeight={"md:h-80"} />
    </div>
  )
}

export default Services
