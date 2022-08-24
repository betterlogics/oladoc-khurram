import React from 'react'
import Marquee from "react-fast-marquee";
import "./Oladocnews.css"
export default function Oladocnews() {
  return (
    <div className='oladoc-news'>
        <div className="container py-5">
            <h2 className="h4 mb-4">oladoc in news</h2>
            <marquee behavior="" direction="" className="d-block brand-news-slider">
                <a href="" target="_blank" className="d-inline-block px-4">
                    <img src="/dawn.png" alt="" />
                </a>
                <a href="" target="_blank" className="d-inline-block px-4">
                    <img src="/express-tribune.gif"  alt="" />
                </a>
                <a href="" target="_blank" className="d-inline-block px-4">
                    <img src="/daily-times.png"  alt="" />
                </a>
                <a href="" target="_blank" className="d-inline-block px-4">
                    <img src="/pro-pakistani.png"  alt="" />
                </a>
                <a href="" target="_blank" className="d-inline-block px-4">
                    <img src="/pakistan-today.png"  alt="" />
                </a>
                <a href="" target="_blank" className="d-inline-block px-4">
                    <img src="/tech-juice.png"  alt="" />
                </a>
                <a href="" target="_blank" className="d-inline-block px-4">
                    <img src="/perspective.png"  alt="" />
                </a>
            </marquee>
        </div>
      
    </div>
  )
}
