import React from 'react'
import Blogsnav from '../Blogsnav/Blogsnav'
import Explore from '../Explore/Explore'
import Healtharticles from '../Healtharticles/Healtharticles'
import Healthnav from '../Healthnav/Healthnav'
import Healthslide from '../Healthslide/Healthslide'

export default function Blogs_main() {
  return (
    <div>
      <Healthnav/>
      <Blogsnav/>
      <Healthslide/>
      <Healtharticles/>
      <Explore/>
    </div>
  )
}
