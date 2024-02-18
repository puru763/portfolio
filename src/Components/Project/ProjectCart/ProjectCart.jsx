import React from "react";
import "./ProjectCart.css";
import flux from "./flux.jpg";
import bookify from "./Bookify.png";
import notes from "./reactnotes.png";
import hotel from "./hotel booking.png";
import quiz from "./quiz app.png"

const ProjectCart = () => {
  return (
    <div className="project-data-container">
      <div className="project-cart-data-heading">
        <strong>Project 1 </strong>
      </div>

      <div className="Project-cart-container">
        <div className="project-cart-data">
          <div className="project-cart-data-name"> Hotel Booking </div>
          <div className="project-cart-data-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            reiciendis, doloremque beatae ratione quae animi tempore nulla
            cupiditate veniam maiores sint blanditiis recusandae sed. Ut unde,
            nobis blanditiis ducimus est deleniti molestias.
          </div>

          <div className="project-cart-data-button">
            <button
              className="project-sourcecode-btn"
              onClick={() => (window.location.href = "https://github.com/puru763/Hotel-Booking-Java")}
            >
              View Project
            </button>
          </div>
        </div>
        <div className="project-cart-img">
          <img className="project-img" src={hotel} alt="" />
        </div>
      </div>

      <div className="project-cart-data-heading">
        <strong>Project 2 </strong>
      </div>

      <div className="Project-cart-container">
        <div className="project-cart-data">
          <div className="project-cart-data-name"> Flux Furniture </div>
          <div className="project-cart-data-description">
            Responsive React.js website for Flux Furniture, featuring nested
            routing for product categories and a user-friendly interface.
            Utilized skills in React, routing, and responsive design
          </div>

          <div className="project-cart-data-button">
            <button
              className="project-sourcecode-btn"
              onClick={() => (window.location.href = "https://github.com/puru763/Flux-Furniture")}
            >
              View Project
            </button>
          </div>
        </div>

        <div className="project-cart-img">
          <img className="project-img" src={flux} alt="" />
        </div>
      </div>

     

      <div className="project-cart-data-heading">
        <strong>Project 3 </strong>
      </div>
      <div className="Project-cart-container">
        <div className="project-cart-data">
          <div className="project-cart-data-name"> React Notes App </div>
          <div className="project-cart-data-description">
            Built modern and responsive web applications using React.js, HTML,
            CSS, and JavaScript. Implemented new features, debugged code, and
            enhanced the user interface to deliver high-quality, user-friendly
            web applications. Utilized frontend development tools, libraries,
            and Git for version control, developing a solid understanding of
            delivering high-quality and user-friendly web applications
          </div>

          <div className="project-cart-data-button">
            <button
              className="project-sourcecode-btn"
              onClick={() =>
                (window.location.href =
                  "https://puru763.github.io/React-Notes-App/")
              }
            >
              View Project
            </button>
          </div>
        </div>

        <div className="project-cart-img">
          <img className="project-img" src={notes} alt="" />
        </div>
      </div>

      <div className="project-cart-data-heading">
        <strong>Project 4 </strong>
      </div>
      <div className="Project-cart-container">
        <div className="project-cart-data">
          <div className="project-cart-data-name"> Bookify </div>
          <div className="project-cart-data-description">
            Developed a scalable React.js frontend web app for simplifying hotel
            bookings, ensuring optimized reservations. Incorporated small,
            modular components to enhance codebase maintainability. Users can
            select dates, room preferences, and locations, ensuring a tailored
            booking experience. The app’s design was focused on optimization to
            deliver a seamless user experience. The scope of the app was
            carefully defined to meet the specific needs of hotel bookings.
          </div>

          <div className="project-cart-data-button">
            <button
              className="project-sourcecode-btn"
              onClick={() => (window.location.href = "https://github.com/puru763/Bookify")}
            >
              View Project
            </button>
          </div>
        </div>

        <div className="project-cart-img">
          <img className="project-img" src={bookify} alt="" />
        </div>
      </div>
<br />
<br />
      
      <div className="project-cart-data-heading">
        <strong>Project 5 </strong>
      </div>

      <div className="Project-cart-container">
        <div className="project-cart-data">
          <div className="project-cart-data-name"> Quiz App </div>
          <div className="project-cart-data-description">
            Spring Boot quiz app with CRUD for questions and quiz creation.
            Implemented Spring Data JPA, handled JSON and HTTP effectively.
            Calculated quiz results with answer verification and response
            generation. Proficient in Java, Spring, REST, and databases.
          </div>

          <div className="project-cart-data-button">
            <button
              className="project-sourcecode-btn"
              onClick={() => (window.location.href = "https://github.com/puru763/quizapp")}
            >
              View Project
            </button>
          </div>
        </div>
        <div className="project-cart-img">
          <img className="project-img" src={quiz} alt="" />
        </div>
      </div>



      
    </div>
  );
};

export default ProjectCart;
