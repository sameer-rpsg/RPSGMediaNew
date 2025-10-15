import About from '@/components/about/About'
import Leadership from '@/components/about/Leadership'
import Manifesto from '@/components/about/Manifesto'
import Office from '@/components/about/Office'
import React from 'react'

const index = () => {
  return (
     <div style={{ background: "#000", color: "#fff" }}>
      <About />
    <Leadership/>
    <Manifesto/>
    <Office/>
    </div>
  )
}

export default index
