import About from '@/components/about/About'
import Leadership from '@/components/about/Leadership'
import Manifesto from '@/components/about/Manifesto'
import React from 'react'

const index = () => {
  return (
     <div style={{ background: "#000", color: "#fff" }}>
      <About />
    <Manifesto/>
    <Leadership/>

    </div>
  )
}

export default index
