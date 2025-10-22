import About from '@/components/about/About'
import Leadership from '@/components/about/Leadership'
import Manifesto from '@/components/about/Manifesto'
import Office from '@/components/about/Office'
import { leaders } from '@/utils/Data'
import React from 'react'

const index = () => {
  return (
     <div style={{ background: "#000", color: "#fff",position:"relative", zIndex:"5" }}>
      <About />
    <Leadership title={"Our Leadership"} leaders={leaders}/>
    <Manifesto/>
    {/* <Office/> */}
    </div>
  )
}

export default index
