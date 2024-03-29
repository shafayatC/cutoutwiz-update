import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import ForMenuSections from "./Partnership/ForMenuSections";
const $ = window.$;

function Navigation(props) {
  function refreshPage() {
    window.location.reload("/");
  }

  function refreshPagees() {
    window.location.href = "./es";
  }

  function refreshPagefr() {
    window.location.href = "./fr";
  }

  function refreshPagenl() {
    window.location.href = "./nl";
  }

  function refreshPageth() {
    window.location.href = "./th";
  }

  function refreshPagede() {
    window.location.href = "./de";
  }

  const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
  return (
    <div id="appWrap">
      <div className="nav-sticky">
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <Container>
            <div>
              <Link className="navbar-brand" to="/">
                <img
                  id="logowiz"
                  src="../../assets/images/ailogo.png"
                  width="100"
                  height="40"
                  alt="thekow_logo"
                />
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mx-auto"></div>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICE
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/#image-editing-service">
                        IMAGES
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#video-editing-service">
                        VIDEOS
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#apps">
                    APPS
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#prices">
                    PRICE
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#how-it-works">
                    HOW IT WORKS
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#blog">
                    BLOGS
                  </a>
                </li>

                <div className="">
                  <li className="nav-item">
                    <Link className="nav-link" to="/explore-our-services">
                      EXPLORE
                    </Link>
                  </li>
                </div>
                <div className="">
                  <li className="nav-item">
                    <Link className="nav-link" to="/virtual-tour">
                      VIRTUAL TOUR
                    </Link>
                  </li>
                </div>
                <li className="nav-item">
                  <Link className="nav-link" target="_blank" to="/contact-us">
                    CONTACT
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://app.cutoutwiz.com/"
                    target="_blank"
                  >
                    <button id="button9">SIGN UP</button>
                  </a>
                </li>

                {/* <li className="nav-item">
                <a className="nav-link" href="/book-a-call">
                  <button className="button9">BOOK A CALL</button>
                </a>
              </li> */}
                {/* <li className="nav-item">
              <Link className="nav-link"onClick={refreshPagees}>
                   <img src="../../assets/images/spain-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>

              

              <li className="nav-item">
              <Link className="nav-link"  to="./fr"onClick={refreshPagefr}>
              <img src="../../assets/images/france-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="./nl"onClick={refreshPagenl}>
              <img src="../../assets/images/netherland-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>

             

              <li className="nav-item">
              <Link className="nav-link" to="./th"onClick={refreshPageth}>
              <img src="../../assets/images/thailand-flag.png" width="20" height="13.5" alt=""/>
                </Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="./de"onClick={refreshPagede}>
              <img src="../../assets/images/germany-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li> */}


                {/* language button */}
                {/* 
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../assets/images/uk-flag.png"
                  width="20"
                  height="13.5"
                  alt=""
                />
                English
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li onClick={refreshPage}>
                  <a className="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/uk-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    English
                  </a>
                </li>
                <li onClick={refreshPagefr}>
                  <a className="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/france-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    French
                  </a>
                </li>
                <li onClick={refreshPagede}>
                  <a className="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/germany-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    German
                  </a>
                </li>
                <li onClick={refreshPagees}>
                  <a className="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/spain-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    Spanish
                  </a>
                </li>
                <li onClick={refreshPage}>
                  <a className="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/thailand-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    Thai
                  </a>
                </li>
                <li onClick={refreshPagenl}>
                  <a className="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/netherland-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    Dutch
                  </a>
                </li>
              </ul>
            </li>
            */}

              </ul>
            </div>
          </Container>
        </Navbar>
        <div className="">
         
          {/* <div >
              <div className="">
                <div className={` container ${isExpanded ? '' : ''}`} onClick={toggleExpansion}>
              3D VISIONARIES UNITE FOR EVOLUTION!
              
              </div>
              </div>
            </div> */}

           
            {/* {isExpanded && (
            <div >

               
            </div>
              )}  */}
          
          <ForMenuSections />
        </div>
      </div>
      <Outlet />


    </div>

  );
}

export default Navigation;
