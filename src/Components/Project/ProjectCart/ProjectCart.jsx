import React from "react";
import "./ProjectCart.css";
import flux from "./flux.jpg";
import bookify from './Bookify.png'
import notes from './reactnotes.png'
import pomodro from './pomodro.png'

const ProjectCart = () => {
  return (
    <div className="project-data-container">




              <div className="Project-cart-container">
                <div className="project-cart-data">
                  <div className="project-cart-data-heading">
                    <strong>Project 1 </strong>
                  </div>

                  <div className="project-cart-data-name"> Flux Furniture </div>
                  <div className="project-cart-data-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                    reiciendis, doloremque beatae ratione quae animi tempore nulla
                    cupiditate veniam maiores sint blanditiis recusandae sed. Ut unde,
                    nobis blanditiis ducimus est deleniti molestias.
                  </div>

                  <div className="project-cart-data-button">
                    <button
                      className="project-sourcecode-btn"
                      onClick={() => (window.location.href = "")}
                    >
                      View Project
                    </button>
                  </div>
                </div>
                  <div className="project-cart-img">
                    <img className="project-img" src={flux} alt="" />
                  </div>
                </div>





              <div className="Project-cart-container">
                <div className="project-cart-data">
                  <div className="project-cart-data-heading">
                    <strong>Project 2 </strong>
                  </div>

                  <div className="project-cart-data-name"> Flux Furniture </div>
                  <div className="project-cart-data-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                    reiciendis, doloremque beatae ratione quae animi tempore nulla
                    cupiditate veniam maiores sint blanditiis recusandae sed. Ut unde,
                    nobis blanditiis ducimus est deleniti molestias.
                  </div>

                  <div className="project-cart-data-button">
                    <button
                      className="project-sourcecode-btn"
                      onClick={() => (window.location.href = "")}
                    >
                      View Project
                    </button>
                  </div>
                </div>

                <div className="project-cart-img">
                  <img className="project-img" src={flux} alt="" />
                </div>
              </div>





                  <div className="Project-cart-container">
                    <div className="project-cart-data">
                      <div className="project-cart-data-heading">
                        <strong>Project 3 </strong>
                      </div>

                      <div className="project-cart-data-name"> Bookify  </div>
                      <div className="project-cart-data-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                        reiciendis, doloremque beatae ratione quae animi tempore nulla
                        cupiditate veniam maiores sint blanditiis recusandae sed. Ut unde,
                        nobis blanditiis ducimus est deleniti molestias.
                      </div>

                      <div className="project-cart-data-button">
                        <button
                          className="project-sourcecode-btn"
                          onClick={() => (window.location.href = "")}
                          >
                          View Project
                        </button>
                      </div>
                    </div>

                    <div className="project-cart-img">
                      <img className="project-img" src={bookify} alt="" />
                    </div>
                  </div>





                  <div className="Project-cart-container">
                    <div className="project-cart-data">
                      <div className="project-cart-data-heading">
                        <strong>Project 4 </strong>
                      </div>

                      <div className="project-cart-data-name"> React Notes App </div>
                      <div className="project-cart-data-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                        reiciendis, doloremque beatae ratione quae animi tempore nulla
                        cupiditate veniam maiores sint blanditiis recusandae sed. Ut unde,
                        nobis blanditiis ducimus est deleniti molestias.
                      </div>

                      <div className="project-cart-data-button">
                        <button
                          className="project-sourcecode-btn"
                          onClick={() => (window.location.href = "https://puru763.github.io/React-Notes-App/")}
                          >
                          View Project
                        </button>
                      </div>
                    </div>

                    <div className="project-cart-img">
                      <img className="project-img" src={notes} alt="" />
                    </div>
                  </div>






                      <div className="Project-cart-container">
                        <div className="project-cart-data">
                          <div className="project-cart-data-heading">
                            <strong>Project 5 </strong>
                          </div>

                          <div className="project-cart-data-name"> Pomodro Timer  </div>
                          <div className="project-cart-data-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                            reiciendis, doloremque beatae ratione quae animi tempore nulla
                            cupiditate veniam maiores sint blanditiis recusandae sed. Ut unde,
                            nobis blanditiis ducimus est deleniti molestias.
                          </div>

                          <div className="project-cart-data-button">
                            <button
                              className="project-sourcecode-btn"
                              onClick={() => (window.location.href = "https://pomodro-timer-react.netlify.app/")}
                              >
                              View Project
                            </button>
                          </div>
                        </div>

                        <div className="project-cart-img">
                          <img className="project-img" src={pomodro} alt="" />
                        </div>
                      </div>
    </div>
  );
};

export default ProjectCart;
