/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./ImageService.css";

const ImageService = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();
  const slider1 = useRef();
  const slider2 = useRef();
  const slider3 = useRef();

  return (
    <div>
      <div class="serviceTop_wrap fwidth">
        <div id="service-top">
          <div id="big-service">
            <div id="image-editing-service"></div>

            <div class="card-img-hidden">
              <div className="srv_prt_btn">
                <Link to="/service-portfolio">Service Portfolio</Link>
              </div>
              <div className="cardImage">
                <div className="srvLeftSlide">
                  <div className="c-animation">
                    <div id="service-left">
                      <img src="assets/images/round for services.png" />
                      <div className="c-ring"></div>
                    </div>
                  </div>
                  <Slider
                    className="mainSlider"
                    autoplay={true}
                    asNavFor={nav2}
                    pauseOnHover={false}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    speed={4000}
                    autoplaySpeed={8000}
                    ref={(slider1) => setNav2(slider1)}
                  >
                    <div id="cf3">
                      <img
                        id="photo1"
                        class="bottom"
                        src="assets/images/Hair-Masking-after.png"
                      />
                      <img
                        id="photo1"
                        class="top"
                        src="assets/images/Hair-Masking-before.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo2"
                        class="bottom"
                        src="assets/images/Ghost manniquin-01.png"
                      />
                      <img
                        id="photo2"
                        class="top"
                        src="assets/images/Ghost manniquin-02.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo3"
                        class="bottom"
                        src="assets/images/recolor-02.png"
                      />
                      <img
                        id="photo3"
                        class="top"
                        src="assets/images/recolor-01.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo4"
                        class="top"
                        src="assets/images/Shadow creation-02.png"
                      />

                      <img
                        id="photo4"
                        class="bottom"
                        src="assets/images/Shadow creation-01.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo5"
                        class="bottom"
                        src="assets/images/prafter.png"
                      />
                      <img
                        id="photo5"
                        class="top"
                        src="assets/images/prbefore.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo6"
                        class="bottom"
                        src="assets/images/color correction-01.png"
                      />
                      <img
                        id="photo6"
                        class="top"
                        src="assets/images/color correction-02.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo7"
                        class="bottom"
                        src="assets/images/manipulation-before-1.png"
                      />
                      <img
                        id="photo7"
                        class="top"
                        src="assets/images/manipulation-after-1.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo8"
                        class="bottom"
                        src="assets/images/Background-remove-after.png"
                      />
                      <img
                        id="photo8"
                        class="top"
                        src="assets/images/Background-remove-before.png"
                      />
                    </div>
                  </Slider>
                </div>

                <div className="srvRighSlide">
                  <p id="servicePar">Services</p>
                  <p id="imgser" style={{ marginTop: "-5%" }}>
                    Image Editing Service
                  </p>
                  <hr id="border10" />
                  <div>
                    <Slider
                      asNavFor={nav1}
                      ref={(slider2) => setNav2(slider2)}
                      slidesToShow={1}
                      autoplay={true}
                      pauseOnHover={false}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      speed={4000}
                      autoplaySpeed={8000}
                    >
                      <div>
                        <p class="sl_heading">IMAGE</p>
                        <p class="sl_pr" id="testret-re">
                          MASKING
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">GHOST</p>
                        <p class="sl_pr" id="testret-re">
                          MANNEQUIN
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">PHOTO</p>
                        <p class="sl_pr" id="testret-re">
                          RECOLOR
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">SHADOW</p>
                        <p class="sl_pr" id="testret-re">
                          CREATION
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">PHOTO</p>
                        <p class="sl_pr" id="testret-ret">
                          RETOUCH
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">COLOR</p>
                        <p class="sl_pr" id="testret-re">
                          CORRECTION
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">IMAGE</p>
                        <p class="sl_pr" id="testret-re">
                          MANIPULATION
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">BACKGROUND</p>
                        <p class="sl_pr" id="testret">
                          REMOVAL
                        </p>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div id="forMobileCardImage">
                <div id="srv_heading">
                  <p id="servicePar">Services</p>
                  <p id="imgser">Image Editing Service</p>
                  <hr id="border10" />
                </div>
                <div className="srvLeftSlide">
                  <div className="c-animation">
                    <div id="service-left-2">
                      <img src="assets/images/round for services.png" />
                      <div className="c-ring"></div>
                    </div>
                  </div>
                  <Slider
                    className="mobi_mainSlider"
                    autoplay={true}
                    asNavFor={nav3}
                    pauseOnHover={true}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    speed={4000}
                    autoplaySpeed={8000}
                    ref={(slider3) => setNav3(slider3)}
                  >
                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">IMAGE</p>
                        <p class="sl_pr" id="testret-re">
                          MASKING
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo1"
                          class="bottom"
                          src="assets/images/Hair-Masking-after.png"
                        />

                        <img
                          id="photo1"
                          class="top"
                          src="assets/images/Hair-Masking-before.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">GHOST</p>
                        <p class="sl_pr" id="testret-re">
                          MANNEQUIN
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo2"
                          class="bottom"
                          src="assets/images/Ghost manniquin-01.png"
                        />
                        <img
                          id="photo2"
                          class="top"
                          src="assets/images/Ghost manniquin-02.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">PHOTO</p>
                        <p class="sl_pr" id="testret-re">
                          RECOLOR
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo3"
                          class="bottom"
                          src="assets/images/recolor-02.png"
                        />
                        <img
                          id="photo3"
                          class="top"
                          src="assets/images/recolor-01.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">SHADOW</p>
                        <p class="sl_pr" id="testret-re">
                          CREATION
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo4"
                          class="top"
                          src="assets/images/Shadow creation-02.png"
                        />

                        <img
                          id="photo4"
                          class="bottom"
                          src="assets/images/Shadow creation-01.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">PHOTO</p>
                        <p class="sl_pr" id="testret-ret">
                          RETOUCH
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo5"
                          class="bottom"
                          src="assets/images/prafter.png"
                        />
                        <img
                          id="photo5"
                          class="top"
                          src="assets/images/prbefore.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">COLOR</p>
                        <p class="sl_pr" id="testret-re">
                          CORRECTION
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo6"
                          class="bottom"
                          src="assets/images/color correction-01.png"
                        />
                        <img
                          id="photo6"
                          class="top"
                          src="assets/images/color correction-02.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">IMAGE</p>
                        <p class="sl_pr" id="testret-re">
                          MANIPULATION
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo7"
                          class="bottom"
                          src="assets/images/manipulation-before-1.png"
                        />
                        <img
                          id="photo7"
                          class="top"
                          src="assets/images/manipulation-after-1.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">BACKGROUND</p>
                        <p class="sl_pr" id="testret">
                          REMOVAL
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo8"
                          class="bottom"
                          src="assets/images/Background-remove-after.png"
                        />
                        <img
                          id="photo8"
                          class="top"
                          src="assets/images/Background-remove-before.png"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageService;
