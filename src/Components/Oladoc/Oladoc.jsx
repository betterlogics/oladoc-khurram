import React from 'react'
import {MdPregnantWoman} from "react-icons/md"
import {FaBaby} from "react-icons/fa"
import {GiMicroscope} from "react-icons/gi"
import {GiHumanEar} from "react-icons/gi"
import "./Oladoc.css"
export default function Oladoc() {
  return (
    <div>
      <div className="find-doctor-special text-center pt-4 pb-2 pb-sm-4">
        <div className="container">
            <h2 className="h4 mb-4 d-md-block">Find doctors by health concern</h2>
            <div className="row special-icon-holder text-primary m-0 mx-md-row px-3 px-md-0pb-md-2 pt-md-3">
                <div className="col-4 col-md-2 px-2 mb-3"><a href=""><div className="img-holder"><MdPregnantWoman className='fs-2' /></div><span>Gynecologist</span></a></div>
                <div className="col-4 col-md-2 px-2 mb-3"><a href=""><div className="img-holder"> <img src="/skin.png" className='w-100' alt="" /> </div><span>Skin Specialist</span></a></div>
                <div className="col-4 col-md-2 px-2 mb-3"><a href=""><div className="img-holder"><FaBaby className='fs-2' /></div><span>Child Specialist</span></a></div>
                <div className="col-4 col-md-2 px-2 mb-3 d-md-none"><a href=""><div className="img-holder"><img src="/orthopedic.png" className='w-100' alt="" /></div><span>Orthopedic Surgeon</span></a></div>
                <div className="col-4 col-md-2 px-2 mb-3"><a href=""><div className="img-holder"><GiMicroscope className='fs-2' /></div><span>Diagnostics</span></a></div>
                <div className="col-4 col-md-2 px-2 mb-3 d-md-none"><a href=""><div className="img-holder"><GiHumanEar className='fs-2' /></div><span>ENT Specialist</span></a></div>
                <div className="col-4 col-md-2 px-2 mb-3"><a href=""><div className="img-holder"><img src="/Heart.png" alt="" className="w-100" /></div><span>Heart Specialist</span></a></div>
                <div className="col-4 col-md-2 px-2 mb-3"><a href=""><div className="img-holder"><img src="/Diabetes.png" alt="" className="w-100" /></div><span>Diabetes Specialist</span></a></div>
                <div className="col-4 col-md-2 px-2 mb-3 d-md-none "><a href=""><div className="img-holder"><img src="/Eye.png" alt="" className="w-100" /></div><span>Eyes Specialist</span></a></div>
            </div>
        </div>
      </div>
    </div>
  )
}
