import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Routes, Route, Link } from "react-router-dom";
import "./Mobilenav.css";
export default function Mobilenav() {
  return (
    <div className="d-block d-lg-none">
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3 mobilenav shadow"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/">
              <img src="/logo.png" alt="" />

              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Link to="/">
              <img src="/logo.png" alt="" />

              </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="container mt-3">
                  <div className="row justify-content-between">
                    <div className="col-6 ">
                      <div className="mb-4 login-signup-section-mob">
                        <a
                          href=""
                          className="bg-white login-signup d-block login-signup-button text-center"
                        >
                          <img src="/patient-icon.svg" alt="" />
                          <p className="pt-2">Patient Login</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-6  ">
                      <div className="mb-4 login-signup-section-mob">
                        <a
                          href=""
                          className="bg-white login-signup d-block login-signup-button text-center"
                        >
                          <img src="/doctor-icon.svg" alt="" />
                          <p className="pt-2">Patient Login</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <Nav className="justify-content-center flex-grow-1 pe-3 text-center">
                  {/* dropdownmenu */}
                  <NavDropdown
                    title="Doctors"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <h6>Find Doctor By Speciality</h6>
                    <NavDropdown.Item >
                      <Link to="/Dermatologist_main" className="nav-link">Dermatologist</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Gynecologist_main' className="nav-link">Gynecologist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Gynecologist_main' className="nav-link">Psychiatrist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Gynecologist_main' className="nav-link">Urologist</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to='/Gynecologist_main' className="nav-link">sexologist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Gynecologist_main' className="nav-link">ENT Specialist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Gynecologist_main' className="nav-link">Eye Specialist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Gynecologist_main' className="nav-link">Neurologist</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Gynecologist_main' className="nav-link">Orthopedic Surgeon</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Gynecologist_main' className="nav-link">Child Specialist</Link></NavDropdown.Item>
                    <h6>Find Doctor By Treatment</h6>
                    <NavDropdown.Item><Link to='/Mri_main' className="nav-link">Mri</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Mri_main' className="nav-link">CT Scan</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Mri_main' className="nav-link">
                      Laiser Hair Removal</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Mri_main' className="nav-link">Test Tube Baby</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Mri_main' className="nav-link">
                      Penile Implants</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Mri_main' className="nav-link">
                      Normal Delivery</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item ><Link to='/Mri_main' className="nav-link">IVF</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Mri_main' className="nav-link">
                      Laiser For Skin</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Mri_main' className="nav-link">Vaccination</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/Mri_main' className="nav-link">All Treatments</Link></NavDropdown.Item>
                    <h6>Find Doctor By Condition</h6>
                    <NavDropdown.Item>Piles</NavDropdown.Item>
                    <NavDropdown.Item>  <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                      Male Sexual Dysfunction</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>  <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                      Male Infertility</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>  <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >Hernia</Link></NavDropdown.Item>
                    <NavDropdown.Item>  <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                      Erectile Dysfunction</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>  <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >Acne Scars</Link></NavDropdown.Item>
                    <NavDropdown.Item>  <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >Skin Diseases</Link></NavDropdown.Item>
                    <NavDropdown.Item>  <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                      Throid Diseases</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>  <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                      Testicular Torsion</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>  <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >All Conditions</Link></NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Hospitals"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <h6>Lahore Hospitals</h6>
                    <NavDropdown.Item >
                    <Link to="/Doctorshospital_main" className="nav-link">  Doctor Hospital</Link>
                    
                    </NavDropdown.Item>
                    <NavDropdown.Item>  <Link to="/Doctorshospital_main" className="nav-link">  Hameed Latif Hospital</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >  <Link to="/Doctorshospital_main" className="nav-link">
                      Omar Hospital $ Cardiac center</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >  <Link to="/Doctorshospital_main" className="nav-link">
                      Mid City Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      National Hospital & Medical Center{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Evercare Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Fatima Memorial Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Ittefaq Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Iqra Mediucal Complex</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      All Hospitals in Lahore{" "}</Link>
                    </NavDropdown.Item>
                    <h6>Karachi Hospitals</h6>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Hashmanis Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      South City Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Altamash General Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Medicare Cardiac & General Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Dr. Zaiuddin Hospital (North Nazimabad){" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      National Medical Center (NMC){" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Darul Sehat Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Patel Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Saifee Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Aga Khan Unevirsty Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Aga Khan Unevirsty Hospital{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      All Hospitals In Karachi</Link>
                    </NavDropdown.Item>
                    <h6>Islamabad Hospitals</h6>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Advance medical Center</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item > <Link to="/Doctorshospital_main" className="nav-link">
                      Islamabad International Hospital</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Shifa International Hospital</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Quiad-e-Azam International Hospital</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Marof International Hospital</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Ali Medical Center</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Kulsum International Hospital</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Islamabad Specialist Clinic{" "}</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      Max Health Hospital</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/Doctorshospital_main" className="nav-link">
                      All Hospitals in Islamabad </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Diagnostics and Lab"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item><Link to="/Labs_main" className="nav-link">Lahore Labs</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/Labs_main" className="nav-link">
                      Isalamabad Labs</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/Labs_main" className="nav-link">Karachi Labs</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link><Link to="/Blogs_main" className="nav-link">Health Blogs</Link></Nav.Link>
                </Nav>
                <div className="bg-white mobile-link-btn mt-4">
                  <div className="container d-block">
                    <div className="row">
                      <div className="col-1"></div>
                      <div className="col-sm-5">
                        <a
                          href=""
                          className="nav-link  bg-white mobile-link-tab"
                        >
                          <img src="/header-call-icon.svg" alt="" />
                          <span className="ps-2">Call Helpline</span>
                        </a>
                      </div>
                      <div className="col-sm-5">
                        <a
                          href=""
                          className="nav-link  bg-white mobile-link-tab"
                        >
                          <img src="/msg-icon.svg" alt="" />
                          <span className="ps-2">Write to Us</span>
                        </a>
                      </div>
                      <div className="col-1"></div>
                    </div>
                  </div>
                </div>
                <div className="container d-block">
                  <p className="text-center pt-3 pb-1">
                    Download the oladoc app for better consultation experience!
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <a href="" className="nav-link text-right ">
                        <img
                          src="/playstore.PNG"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-6">
                      <a href="" className="nav-link">
                        <img
                          src="/app-store.PNG"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <Form className="d-flex mt-4">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
