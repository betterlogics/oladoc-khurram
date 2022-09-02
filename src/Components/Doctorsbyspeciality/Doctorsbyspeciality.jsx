import React from 'react'
import {GoSearch} from "react-icons/go"
import "./Doctorsbyspeciality.css"
export default function Doctorsbyspeciality() {
  return (
    <div>
        <div className="find-doctor-special text-center pt-4 pb-2 pb-sm-4 bg-light">
        <div className="container ">
            <div className="card od-hospital-card p-md-4 p-2">
            <h2 className="h4 mb-4 d-md-block text-start">Find Doctor by Speciality</h2>
            <div className="row special-icon-holder m-0 mx-md-row  px-md-0 pb-md-2 pt-md-3 jutify-content-between">
                <div className="col-6 col-md-2 px-2 mb-3"><a href=""><div className="filter-button"><img src="gynecologist.png" className='w-100' alt="" /></div><span>Gynecologist</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3"><a href=""><div className="filter-button"> <img src="/gynecologist.png" className='w-100' alt="" /> </div><span>Obstetrician</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3"><a href=""><div className="filter-button"><img src="orthopedic-surgeon.png" className='w-100' alt="" /></div><span >Orthopedic Surgeon</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3 d-md-block d-none"><a href=""><div className="filter-button"><img src="general-physician.png" className='w-100' alt="" /></div><span>Internal Medicine Specialist</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3"><a href=""><div className="filter-button"><img src="general-surgeon.png" alt="" className="w-100" /></div><span>General Surgeon</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3 d-md-block d-none"><a href=""><div className="filter-button"><img src="ent-specialist.png" alt="" className="w-100" /></div><span>ENT Specialist</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3"><a href=""><div className="filter-button"><img src="general-surgeon.png" alt="" className="w-100" /></div><span>Laparoscopic Surgeon</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3"><a href=""><div className="filter-button"><img src="general-surgeon.png" alt="" className="w-100" /></div><span>Spinal Surgeon</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3 d-md-block d-none "><a href=""><div className="filter-button"><img src="urologist.png" alt="" className="w-100" /></div><span>Urologist</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3 d-md-block d-none"><a href=""><div className="filter-button"><img src="ent-specialist.png" alt="" className="w-100" /></div><span>ENT Specialist</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3 d-md-block d-none"><a href=""><div className="filter-button"><img src="general-surgeon.png" alt="" className="w-100" /></div><span>Breast Surgeon</span></a></div>
                <div className="col-6 col-md-2 px-2 mb-3 d-md-block d-none"><a href=""><div className="filter-button"><img src="gynecologist.png" className='w-100' alt="" /></div><span>Fertility Consultant</span></a></div>
            </div>
            <div className="mobile-view-more-specialization border ">
                <GoSearch/>
                <span className="px-2 text-truncate">View More Specializations</span>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
