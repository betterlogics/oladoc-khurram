import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Mobilenav.css";
export default function Mobilenav() {
  return (
    <div>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3 mobilenav"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img src="/logo.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src="/logo.png" alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="container mt-3">
                    <div className="row justify-content-between">
                    <div className="col-6 ">
                        <div className="mb-4 login-signup-section-mob">
                        <a href="" className="bg-white login-signup d-block login-signup-button text-center">
                            <img src="/patient-icon.svg" alt="" />
                            <p className="pt-2">Patient Login</p>
                        </a> 
                        </div>
                    </div>
                    <div className="col-6  ">
                    <div className="mb-4 login-signup-section-mob">
                    <a href="" className="bg-white login-signup d-block login-signup-button text-center">
                            <img src="/doctor-icon.svg" alt="" />
                            <p className="pt-2">Patient Login</p>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
               
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  
                  {/* dropdownmenu */}
                  <NavDropdown
                    title="Doctors"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <h6>Find Doctor By Speciality</h6>
                    <NavDropdown.Item href="#">Dermatologist</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                  Gynecologist
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                    Psychiatrist
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                    Urologist
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                    sexologist
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                   ENT Specialist
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                    Eye Specialist
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                    Neurologist
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                    Orthopedic Surgeon
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                    Child Specialist
                    </NavDropdown.Item>
                    <h6>Find Doctor By Treatment</h6>
                    <NavDropdown.Item href="#">Mri</NavDropdown.Item>
                    <NavDropdown.Item href="#">CT Scan</NavDropdown.Item>
                    <NavDropdown.Item href="#">Laiser Hair Removal</NavDropdown.Item>
                    <NavDropdown.Item href="#">Test Tube Baby</NavDropdown.Item>
                    <NavDropdown.Item href="#">Penile Implants</NavDropdown.Item>
                    <NavDropdown.Item href="#">Normal Delivery</NavDropdown.Item>
                    <NavDropdown.Item href="#">IVF</NavDropdown.Item>
                    <NavDropdown.Item href="#">Laiser For Skin</NavDropdown.Item>
                    <NavDropdown.Item href="#">Vaccination</NavDropdown.Item>
                    <NavDropdown.Item href="#">All Treatments</NavDropdown.Item>
                    <h6>Find Doctor By Condition</h6>
                    <NavDropdown.Item href="#">Piles</NavDropdown.Item>
                    <NavDropdown.Item href="#">Male Sexual Dysfunction</NavDropdown.Item>
                    <NavDropdown.Item href="#">Male Infertility</NavDropdown.Item>
                    <NavDropdown.Item href="#">Hernia</NavDropdown.Item>
                    <NavDropdown.Item href="#">Erectile Dysfunction</NavDropdown.Item>
                    <NavDropdown.Item href="#">Acne Scars</NavDropdown.Item>
                    <NavDropdown.Item href="#">Skin Diseases</NavDropdown.Item>
                    <NavDropdown.Item href="#">Throid Diseases</NavDropdown.Item>
                    <NavDropdown.Item href="#">Testicular Torsion</NavDropdown.Item>
                    <NavDropdown.Item href="#">All Conditions</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Hospitals"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <h6>Lahore Hospitals</h6>
                    <NavDropdown.Item href="#">Doctor Hospital</NavDropdown.Item>
                    <NavDropdown.Item href="#">Hameed Latif Hospital</NavDropdown.Item>
                    <NavDropdown.Item href="#">Omar Hospital $ Cardiac center</NavDropdown.Item>
                    <NavDropdown.Item href="#">Mid City Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">National Hospital & Medical Center </NavDropdown.Item>
                    <NavDropdown.Item href="#">Evercare Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Fatima Memorial Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Ittefaq Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Iqra Mediucal Complex</NavDropdown.Item>
                    <NavDropdown.Item href="#">All Hospitals in Lahore </NavDropdown.Item>
                    <h6>Karachi Hospitals</h6>
                    <NavDropdown.Item href="#">Hashmanis Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">South City Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Altamash General Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Medicare Cardiac & General Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Dr. Zaiuddin Hospital (North Nazimabad) </NavDropdown.Item>
                    <NavDropdown.Item href="#">National Medical Center  (NMC) </NavDropdown.Item>
                    <NavDropdown.Item href="#">Darul Sehat Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Patel  Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Saifee  Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Aga Khan Unevirsty Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">Aga Khan Unevirsty Hospital </NavDropdown.Item>
                    <NavDropdown.Item href="#">All Hospitals In Karachi</NavDropdown.Item>
                    <h6>Islamabad Hospitals</h6>
                    <NavDropdown.Item href="#">Advance medical Center</NavDropdown.Item>
                    <NavDropdown.Item href="#">Islamabad International Hospital</NavDropdown.Item>
                    <NavDropdown.Item href="#">Shifa International Hospital</NavDropdown.Item>
                    <NavDropdown.Item href="#">Quiad-e-Azam International Hospital</NavDropdown.Item>
                    <NavDropdown.Item href="#">Marof International Hospital</NavDropdown.Item>
                    <NavDropdown.Item href="#">Ali Medical Center</NavDropdown.Item>
                    <NavDropdown.Item href="#">Kulsum International Hospital</NavDropdown.Item>
                    <NavDropdown.Item href="#">Islamabad Specialist Clinic </NavDropdown.Item>
                    <NavDropdown.Item href="#">Max Health Hospital</NavDropdown.Item>
                    <NavDropdown.Item href="#">All Hospitals in Islamabad</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                    title="Diagnostics and Lab"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                         <NavDropdown.Item href="#">Doctor Hospital</NavDropdown.Item>
                    </NavDropdown>
                  <Nav.Link href="#action1">Health Blogs</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
